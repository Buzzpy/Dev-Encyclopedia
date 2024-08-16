# ⚡ Z-Fetch

The mighty native fetch api wrapper made to enhance fetching in JavaScript Applications.

Originally made for [Z Js Framework](https://github.com/Z-Js-Framework/z-js) but can work in any framework or javascript environment with no additional setup needed.

## 🚀 Features

- Framework Agnostic, use in any javaScript project.
- Zero dependencies, wraps native fetch api.
- Intiutive modern api with configuration and flexibility per request.
- Can cancel requests on demand or on timeout.
- Has global configuration for global request options.
- Supports all native fetch api options.
- Bultin caching and cache auto cache revalidation
- Builtin request retries, max retries and polling.
- Builtin bearer token handler, you don't need interceptors!
- Auto json parsing and graceful error handling
- Request refetching on demand

## ▶️ Installation

1. Using npm, yarn or pnpm

``` bash
npm install @z-js-framework/z-fetch
```

2. Using a CDN

``` html
<script src="https://cdn.jsdelivr.net/npm/@z-js-framework/z-fetch@latest/dist/z-fetch.js"></script>
```

or if your using [Z Js Framework](https://github.com/Z-Js-Framework/z-js) you don't have to install anything, this comes with the framework.

## 😇 How To Use With Examples

### GET Request

``` js
import { GET } from '@z-js-framework/z-fetch';

const getPosts = async () => {
   const { data, error, loading } = await GET('https://jsonplaceholder.typicode.com/posts');
  if (data) {
    console.log('Data:', data);
  } else {
    console.error('Error:', error.message);
  }
}
```

### POST Request

``` js
import { POST } from '@z-js-framework/z-fetch';

const createPost = async () => {
   const { data, error, loading } = await POST('https://jsonplaceholder.typicode.com/posts', {
    body: {
      title: 'dune',
      body: 'a story about the dune verse!',
      userId: 1,
    }
   });
  if (data) {
    console.log('Data:', data);
  } else {
    console.error('Error:', error.message);
  }
}
```

### PUT Request

``` js
import { PUT } from '@z-js-framework/z-fetch';

const updatePost = async () => {
   const { data, error, loading } = await PUT('https://jsonplaceholder.typicode.com/posts/1', {
    body: {
      title: 'dune latest',
      body: 'a story about the dune verse has changed now the spices rule!',
      userId: 1,
    }
   });
  if (data) {
    console.log('Data:', data);
  } else {
    console.error('Error:', error.message);
  }
}
```

### PATCH Request

``` js
import { PATCH } from '@z-js-framework/z-fetch';

const modifyPost = async () => {
   const { data, error, loading } = await PATCH('https://jsonplaceholder.typicode.com/posts/1', {
    body: {
      title: 'dune movie'
    }
   });
  if (data) {
    console.log('Data:', data);
  } else {
    console.error('Error:', error.message);
  }
}
```

### DELETE Request

``` js
import { DELETE } from '@z-js-framework/z-fetch';

const deletePost = async () => {
   const { error } = await DELETE('https://jsonplaceholder.typicode.com/posts/1');
  if (!error) {
    console.log('item deleted successfully!');
  } else {
    console.error('Error Deleting Item:', error.message);
  }
}
```

## Advanced Usage 😳

### Set Global Configuration

```js
import { setConfig, GET } from '@z-js-framework/z-fetch';

setConfig({
  baseUrl: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  withCredentials: false,
  parseJson: true,
});

const getPosts = async () => {
   const { data, error, loading } = await GET('/posts');
  if (data) {
    console.log('Data:', data);
  } else {
    console.error('Error:', error.message);
  }
}
```

or set per request

```js
import { GET } from '@z-js-framework/z-fetch';

const getPosts = async () => {
   const { data, error, loading } = await GET('https://jsonplaceholder.typicode.com/posts', {
    parseJson: false,
     headers: {
    'Content-Type': 'application/text',
     },
     retry: true,
     maxRetries: 3,
   });

  if (data) {
    console.log('Data:', data);
  } else {
    console.error('Error:', error.message);
  }
}
```

## List of All Available Config Options

Here is the list of all the available options in addtion to native fetch's options. Note that all fetch api's options are valid and supported, these below are just enhancements z-fetch adds on top.

| Option             | Description                                          | Use Case                                   | Default Value                                           |
| ------------------ | ---------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------- |
| `baseUrl`          | Base URL for all requests                            | Set a common base URL for all API requests | `''`                                                    |
| `bearerToken`      | Bearer token for authentication                      | Authenticate requests with a bearer token  | `null`                                                  |
| `timeout`          | Request timeout in milliseconds                      | Set a timeout for requests                 | `90000`                                                 |
| `retry`            | Whether to retry failed requests                     | Automatically retry failed requests        | `false`                                                 |
| `maxRetries`       | Maximum number of retries                            | Set a limit on the number of retries       | `3`                                                     |
| `startPolling`     | Whether to start polling automatically               | Enable automatic polling                   | `false`                                                 |
| `stopPolling`      | Whether to stop polling automatically                | Disable polling after certain conditions   | `false`                                                 |
| `pollingInterval`  | Interval between polls in milliseconds               | Set polling interval                       | `5000`                                                  |
| `revalidateCache`  | Time in milliseconds before revalidating cached data | Refresh cached data after a specific time  | `10000`                                                 |
| `withCredentials`  | Whether to include credentials in requests           | Include credentials like cookies           | `false`                                                 |
| `withCache`        | Whether to use caching for GET requests              | Cache GET request responses                | `true`                                                  |
| `parseJson`        | Whether to parse response as JSON                    | Automatically parse JSON responses         | `true`                                                  |
| `stringifyPayload` | Whether to stringify request body                    | Automatically stringify request body       | `true`                                                  |
| `mode`             | CORS mode for requests                               | Set CORS mode (e.g., 'cors', 'no-cors')    | `'cors'`                                                |
| `headers`          | Default headers for all requests                     | Set default headers                        | `{'Content-Type': 'application/json', 'Accept': '*/*'}` |

Alternatively you can set the bearer token globally for all requests using setBearerToken method as below:

```js
import { setBearerToken } from '@z-js-framework/z-fetch';

setBearerToken('your-bearer-token');
```

otherwise there more interesting things you can do even with each request, here are examples for polling, caching, request cancelling and refetching.

### Polling

```js
import { setConfig, GET } from '@z-js-framework/z-fetch';

setConfig({
  baseUrl: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  withCredentials: true,
  parseJson: true,
});

let pageCount = 1;
let pagesData = [];

const getPosts = async () => {
   const { data, error, loading, startPolling, stopPolling, onPollDataReceived } = await GET(`/posts?page=${pageCount}`);
  if (data) {
    pagesData.push({
      page: 1,
      data: data,
    })
    pageCount++;
  } else {
    console.error('Error:', error.message);
  }

  if(pageCount < 100) {
    startPolling(10000); // explicitly poll after every 10 seconds
    onPollDataReceived((data) => {
      pagesData.push({
        page: pageCount,
        data: data,
      });
      pageCount++;
    })
  } else {
    stopPolling();
  }
}
```

The code above will poll the API every 10 seconds until it reaches 100 pages, it uses extra polling methods exposed in the request's response. onPollDataReceived takes a callback function that will be called every time the API returns new data and avail that new data to it.

### Caching

```js
import { GET } from '@z-js-framework/z-fetch';

const getCachedPosts = async () => {
  const { data, error, loading } = await GET('https://jsonplaceholder.typicode.com/posts', {
    withCache: true,
    revalidateCache: 60000, // Revalidate cache every 60 seconds
  });
  if (data) {
    console.log('Cached Data:', data);
  } else {
    console.error('Caching Error:', error.message);
  }
};
```

### Request Cancelling

``` js
import { GET } from '@z-js-framework/z-fetch';

let cancelButton = document.getElementById('cancelButton');

const getPosts = async () => {
   const { data, error, loading, cancelRequest } = await GET('https://jsonplaceholder.typicode.com/posts');
  if (data) {
    console.log('Data:', data);
  } else {
    console.error('Error:', error.message);
  }
}

cancelButton.addEventListener('click', () => cancelRequest());
```

### Refetching

``` js
import { GET } from '@z-js-framework/z-fetch';

let reloadButton = document.getElementById('reloadButton');

let itemsList = [];

const getPosts = async () => {
   const { data, error, loading, refetch } = await GET('https://jsonplaceholder.typicode.com/posts');
  if (data) {
    itemsList = data;
  } else {
    console.error('Error:', error.message);
  }
}

reloadButton.addEventListener('click', () => refetch((newData) => {
  itemsList = newData;
}));
```

Refetch takes in a callback, it makes the same exact request with the same everything set and then calls the callback with the new data.

### Lastly but not least

you can just use z-fetch as normal fetch, it's just a wrapper around fetch and adds some extra features but in case you want to tap in and do some stuff sure, here is a quick example:

```js
import { POST } from '@z-js-framework/z-fetch';

const createPost = async () => {
  const { response } = await POST('https://jsonplaceholder.typicode.com/posts', {
    body: JSON.stringify({
      title: 'dune',
      body: 'A family gets attacked and great houses do nothing about it!',
      userId: 1,
    })
    parseJson: false,
    stringifyPayload: false,
  });
  let data = await response.json();
  if (data) {
    console.log('Data:', data);
  } else {
    console.error('Error:', response.error.message);
  }
};
```

As you can see, not exactly but it doesn't get in your way in case you want to do something with the underlying fetch api, its very flexible. Enjoy!!!

## 🌟 Contributing

Well that's it for now, more stuff surely will come, but so far that's all you need to elevate fetching in your applications, tell me what you think or contribute or suggest a feature, I'll be happy to hear from you.

Humble regards, I am [Hussein Kizz](hssnkizz@gmail.com)