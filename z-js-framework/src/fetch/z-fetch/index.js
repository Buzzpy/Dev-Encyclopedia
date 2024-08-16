/**
 * @typedef {Object} Config
 * @property {string} baseUrl - Base URL for all requests
 * @property {string|null} bearerToken - Bearer token for authentication
 * @property {number} timeout - Request timeout in milliseconds
 * @property {boolean} retry - Whether to retry failed requests
 * @property {number} maxRetries - Maximum number of retries
 * @property {boolean} startPolling - Whether to start polling automatically
 * @property {boolean} stopPolling - Whether to stop polling automatically
 * @property {number} pollingInterval - Interval between polls in milliseconds
 * @property {number} revalidateCache - Time in milliseconds before revalidating cached data
 * @property {boolean} withCredentials - Whether to include credentials in requests
 * @property {boolean} withCache - Whether to use caching for GET requests
 * @property {boolean} parseJson - Whether to parse response as JSON
 * @property {boolean} stringifyPayload - Whether to stringify request body
 * @property {string} mode - CORS mode for requests
 * @property {Object} headers - Default headers for all requests
 */

/**
 * @typedef {Object} RequestResult
 * @property {boolean} loading - Whether the request is still loading
 * @property {Object|null} error - Error object if request failed
 * @property {any} data - Response data
 * @property {Response|null} response - Fetch API Response object
 * @property {Function} refetch - Function to refetch the request, takes in a callback and gives it the data after refetching
 * @property {Function} cancelRequest - Function to cancel the request
 * @property {Function} startPolling - Function to start polling
 * @property {Function} stopPolling - Function to stop polling
 * @property {Function} onPollDataReceived - Function to set handlng polling result data, takes in a callback and give it the poll data on every poll.
 */

/**
 * @typedef {Config & RequestInit} RequestOptions
 */

/** @type {Config} */
const defaultConfig = {
  baseUrl: '',
  bearerToken: null,
  timeout: 90000,
  retry: false,
  maxRetries: 3,
  startPolling: false,
  stopPolling: false,
  pollingInterval: 5000,
  revalidateCache: 10000,
  withCredentials: false,
  withCache: true,
  parseJson: true,
  stringifyPayload: true,
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
};

/** @type {Config} */
let config = { ...defaultConfig };

/** @type {Map<string, any>} */
const cache = new Map();

/**
 * Updates the global configuration
 * @param {Partial<Config>} newConfig - New configuration options
 */
export function setConfig(newConfig) {
  config = { ...config, ...newConfig };
}

/**
 * Sets the bearer token for authentication
 * @param {string} token - The bearer token
 */
export function setBearerToken(token) {
  config.bearerToken = token;
  config.headers['Authorization'] = `Bearer ${token}`;
}

/**
 * Performs an HTTP request
 * @param {string} url - The URL to request
 * @param {string} method - The HTTP method
 * @param {RequestOptions} [options={}] - Additional options for the request, combining Config and Fetch API options
 * @returns {Promise<RequestResult>} The request result
 */
async function request(url, method, options) {
  const abortController = new AbortController();
  const { signal } = abortController;

  let loading = true;
  let error = null;
  let data = null;
  let retryCount = 0;

  const fullUrl = config.baseUrl ? config.baseUrl + url : url;

  const timeoutId = setTimeout(() => {
    abortController.abort();
    loading = true;
    error = { message: 'Request timed out!', status: 'TIMEOUT' };
  }, config.timeout);

  const performRequest = async () => {
    try {
      let fetchOptions = {
        signal,
        method,
        ...config,
        ...options,
        headers: { ...config.headers, ...options?.headers },
      };

      if (
        config.stringifyPayload &&
        fetchOptions.body &&
        typeof fetchOptions.body === 'object'
      ) {
        fetchOptions.body = JSON.stringify(fetchOptions.body);
      }

      const response = await fetch(fullUrl, fetchOptions);

      if (!response.ok) {
        error = { message: response.statusText, status: response.status };
      } else {
        data = config.parseJson ? await response.json() : await response.text();
      }

      clearTimeout(timeoutId);
      loading = false;
      return { loading, error, data, response };
    } catch (err) {
      error = { message: err.message, status: 'NETWORK_ERROR' };
      clearTimeout(timeoutId);
      loading = false;
      return { loading, error, data, response: null };
    }
  };

  // Check cache for GET requests
  const cacheKey = `${method}:${fullUrl}`;
  if (config.withCache && method === 'GET' && cache.has(cacheKey)) {
    setTimeout(() => {
      performRequest().then((newResult) => {
        if (!newResult.error) {
          cache.set(cacheKey, newResult);
        }
      });
    }, config.revalidateCache);
    return cache.get(cacheKey);
  }

  const refetch = async (callback) => {
    let newData = await performRequest();
    return callback(newData);
  };

  const cancelRequest = () => {
    abortController.abort();
  };

  let result = await performRequest();

  while (config.retry && retryCount < config.maxRetries && result.error) {
    retryCount++;
    result = await performRequest();
  }

  // Cache successful GET requests
  if (config.withCache && method === 'GET' && !result.error) {
    cache.set(cacheKey, result);
  }

  let pollingInterval;
  let pollCallback;

  const stopPolling = () => {
    if (pollingInterval) {
      clearInterval(pollingInterval);
      pollingInterval = null;
    }
  };

  const onPollDataReceived = (callback) => {
    if (typeof callback !== 'function') {
      throw new Error('onPollDataReceived callback must be a function');
    }
    pollCallback = callback;
    // Start polling if it was requested but delayed due to missing callback
    if (config.startPolling && !pollingInterval) {
      startPolling();
    }
  };

  const startPolling = (interval = config.pollingInterval) => {
    if (!pollCallback) {
      console.warn('Polling not started: onPollDataReceived callback not set');
      return;
    }
    if (pollingInterval) {
      stopPolling(); // Clear existing interval if any
    }
    pollingInterval = setInterval(async () => {
      try {
        const newResult = await performRequest();
        pollCallback(newResult);
        Object.assign(result, newResult);
      } catch (error) {
        console.error('Polling error:', error);
        // Optionally stop polling on error
        // stopPolling();
      }
    }, interval);
  };

  return {
    ...result,
    refetch,
    cancelRequest,
    startPolling,
    stopPolling,
    onPollDataReceived,
  };
}

/**
 * Performs a GET request
 * @param {string} url - The URL to request
 * @param {RequestOptions} [options={}] - Additional options for the request, combining Config and Fetch API options
 * @returns {Promise<RequestResult>} The request result
 */
export function GET(url, options) {
  return request(url, 'GET', options);
}

/**
 * Performs a POST request
 * @param {string} url - The URL to request
 * @param {RequestOptions} [options={}] - Additional options for the request, combining Config and Fetch API options
 * @returns {Promise<RequestResult>} The request result
 */
export function POST(url, options) {
  return request(url, 'POST', options);
}

/**
 * Performs a PUT request
 * @param {string} url - The URL to request
 * @param {RequestOptions} [options={}] - Additional options for the request, combining Config and Fetch API options
 * @returns {Promise<RequestResult>} The request result
 */
export function PUT(url, options) {
  return request(url, 'PUT', options);
}

/**
 * Performs a DELETE request
 * @param {string} url - The URL to request
 * @param {RequestOptions} [options={}] - Additional options for the request, combining Config and Fetch API options
 * @returns {Promise<RequestResult>} The request result
 */
export function DELETE(url, options) {
  return request(url, 'DELETE', options);
}

/**
 * Performs a PATCH request
 * @param {string} url - The URL to request
 * @param {RequestOptions} [options={}] - Additional options for the request, combining Config and Fetch API options
 * @returns {Promise<RequestResult>} The request result
 */
export function PATCH(url, options) {
  return request(url, 'PATCH', options);
}
