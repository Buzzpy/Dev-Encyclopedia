/**
 * Updates the global configuration
 * @param {Partial<Config>} newConfig - New configuration options
 */
export function setConfig(newConfig: Partial<Config>): void;
/**
 * Sets the bearer token for authentication
 * @param {string} token - The bearer token
 */
export function setBearerToken(token: string): void;
/**
 * Performs a GET request
 * @param {string} url - The URL to request
 * @param {RequestOptions} [options={}] - Additional options for the request, combining Config and Fetch API options
 * @returns {Promise<RequestResult>} The request result
 */
export function GET(url: string, options?: RequestOptions): Promise<RequestResult>;
/**
 * Performs a POST request
 * @param {string} url - The URL to request
 * @param {RequestOptions} [options={}] - Additional options for the request, combining Config and Fetch API options
 * @returns {Promise<RequestResult>} The request result
 */
export function POST(url: string, options?: RequestOptions): Promise<RequestResult>;
/**
 * Performs a PUT request
 * @param {string} url - The URL to request
 * @param {RequestOptions} [options={}] - Additional options for the request, combining Config and Fetch API options
 * @returns {Promise<RequestResult>} The request result
 */
export function PUT(url: string, options?: RequestOptions): Promise<RequestResult>;
/**
 * Performs a DELETE request
 * @param {string} url - The URL to request
 * @param {RequestOptions} [options={}] - Additional options for the request, combining Config and Fetch API options
 * @returns {Promise<RequestResult>} The request result
 */
export function DELETE(url: string, options?: RequestOptions): Promise<RequestResult>;
/**
 * Performs a PATCH request
 * @param {string} url - The URL to request
 * @param {RequestOptions} [options={}] - Additional options for the request, combining Config and Fetch API options
 * @returns {Promise<RequestResult>} The request result
 */
export function PATCH(url: string, options?: RequestOptions): Promise<RequestResult>;
export type Config = {
    /**
     * - Base URL for all requests
     */
    baseUrl: string;
    /**
     * - Bearer token for authentication
     */
    bearerToken: string | null;
    /**
     * - Request timeout in milliseconds
     */
    timeout: number;
    /**
     * - Whether to retry failed requests
     */
    retry: boolean;
    /**
     * - Maximum number of retries
     */
    maxRetries: number;
    /**
     * - Whether to start polling automatically
     */
    startPolling: boolean;
    /**
     * - Whether to stop polling automatically
     */
    stopPolling: boolean;
    /**
     * - Interval between polls in milliseconds
     */
    pollingInterval: number;
    /**
     * - Time in milliseconds before revalidating cached data
     */
    revalidateCache: number;
    /**
     * - Whether to include credentials in requests
     */
    withCredentials: boolean;
    /**
     * - Whether to use caching for GET requests
     */
    withCache: boolean;
    /**
     * - Whether to parse response as JSON
     */
    parseJson: boolean;
    /**
     * - Whether to stringify request body
     */
    stringifyPayload: boolean;
    /**
     * - CORS mode for requests
     */
    mode: string;
    /**
     * - Default headers for all requests
     */
    headers: any;
};
export type RequestResult = {
    /**
     * - Whether the request is still loading
     */
    loading: boolean;
    /**
     * - Error object if request failed
     */
    error: any | null;
    /**
     * - Response data
     */
    data: any;
    /**
     * - Fetch API Response object
     */
    response: Response | null;
    /**
     * - Function to refetch the request, takes in a callback and gives it the data after refetching
     */
    refetch: Function;
    /**
     * - Function to cancel the request
     */
    cancelRequest: Function;
    /**
     * - Function to start polling
     */
    startPolling: Function;
    /**
     * - Function to stop polling
     */
    stopPolling: Function;
    /**
     * - Function to set handlng polling result data, takes in a callback and give it the poll data on every poll.
     */
    onPollDataReceived: Function;
};
export type RequestOptions = Config & RequestInit;
