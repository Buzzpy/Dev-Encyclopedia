# 🔥 Z.Js Framework (v0.0.8)

<div align="left">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/Z-Js-Framework/z-js.svg)](https://github.com/Z-Js-Framework/z-js/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Z-Js-Framework/z-js.svg)](https://github.com/Z-Js-Framework/z-js/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Z-Js-Framework/z-js/blob/main/LICENSE)
![npm](https://img.shields.io/npm/dw/z-js-framework)
![GitHub Repo stars](https://img.shields.io/github/stars/Z-Js-Framework/z-js?style=social)

</div>

- The literally low mental overhead Js framework, that enhances html, css and javascript.


## 🚀 Getting Started

Before we get you started in case you asking, why another framework? first see [why z js framework](./sidenotes.md#-why-another-framework-why-not-listen-up) otherwise if you good with the motive of this, then the easiest way to get started with Z.Js Framework is to use the [create-z-project](https://github.com/z-js-framework/create-z-project) using command below. It will create a starter project with recommended project structure and common pattern examples.

``` bash
npx create-z-project your-project-name
```

after that just follow instructions that follow on there. And don't forget to install this vscode extension for better experience, [Inline HTML](https://marketplace.visualstudio.com/items?itemName=pushqrdx.inline-html) otherwise this might be so ugly syntax wise though it will still be simply beautiful.

And, also if you want, you can still just install z alone without any starters with command below

```bash
npm install z-js-framework
```

or use a cdn link directly in your html file, put it in the head or body tag in index.html file of your project.

```html
<script src="https://cdn.jsdelivr.net/npm/z-js-framework@latest/dist/z.js"></script>
```

Or for the ninjas, grab the z.js script file from Z.Js github repo in dist directory and include it in your project.

One other thing once again, VS Code Extension, [Inline HTML](https://marketplace.visualstudio.com/items?itemName=pushqrdx.inline-html) (recommended)

This is not a must, but I must tell you that Z Js uses JavaScript template literals even for templating or crafting your UI, for example:

```html
import { html } from 'z-js-framework'

let name = 'Kizz'
let greetElement = html`<h1>Hello there, ${name}</h1>`
```

Now, as you can see, it's pretty easy: just put your stuff in backticks, but we know the IDE won't highlight that as HTML but as a normal string, so for the best experience and auto completions to make it feel like real HTML, get this extension [Inline HTML](https://marketplace.visualstudio.com/items?itemName=pushqrdx.inline-html) as it will highlight them and give you some auto completions here and there, as we wait to work on our own Z.Js VS Code extension, you can use that extension and it will work just fine with Z.Js. If you want, just don't use it; it's still fine!

Otherwise here is a quick view into the docs.

## 🌟 Features

- [Routing](#routing)
- [Components And Styling](#components-and-styling)
- [Global State](#global-state)
- [Components State](#components-state)
- [Navigation](#navigation)
- [Reactivity](#️-reactivity)
- [Hooks](#hooks)
- [Rendering Lists](#lists)
- [Fetching](#fetching)

More Features coming, see the [Roadmap](./sidenotes.md#roadmap-and-features-if-you-like-to-contribute)

## ❤️ Demos?

- [Z-chat](https://github.com/Hussseinkizz/z-chat) -- demo chat app made using z js framework and socket io
- [Z-Tailwind-Demo](https://github.com/BakungaBronson/Z-Tailwind-Demo) -- demo app showing how to use tailwindcss with z js framework
- [z-js-short-wave](https://github.com/KimmyDavis/z-js-short-wave) -- audio player app made using z js framework, enjoy the live demo [🎶 here](https://z-shot-wave.netlify.app/)

We will be providing more examples, you can also submit your own examples in the [issues](https://github.com/Z-Js-Framework/z-js/issues) section. Am excited to see what you build for sure!

## 🎯 Documentation

> ✅ Routing <a name="routing"></a>

``` js
'use strict';

import { render } from 'z-js-framework';
import About from './pages/about.js';
import Home from './pages/home.js';
import Layout from './pages/layout.js';
import NotFound from './pages/notFound.js';

const root = document.querySelector('#root');

const routes = [
  {
    route: '/',
    component: Home,
  },
  {
    route: '/about',
    component: About,
  },
  {
    route: '/*',
    component: NotFound,
  },
];

// render the app
render(root, routes);
```

Then, have an index HTML file that can act as the entry point for your application in the browser. It can look like this: no magic, just a simple HTML file with a script tag pointing to your index.js file with a type module attribute to tell the browser that it's a module that can import other JS files; otherwise, in there, you can do normal stuff like add a style tag if you like, just make sure the there's an element with root id so that's where z will render the app as seen in the first step above.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Z App</title>
  <script src="./index.js" defer type="module"></script>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div id="root">--loading app--</div>
</body>

</html>
```

Now, let's have a look at a Z Js component, a simple re-usable button component. It can be found in `example/components/button.js` and here is how it's implemented.

> ✅ Components & Styling <a name="components-and-styling"></a>

```js
import { css, html } from 'z-js-framework';

export const Button = (children, setCount) => {
  const buttonClass = css`
    background-color: tomato;
    color: #fff;
    display: flex;
    gap: 1rem;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    transition: background-color 0.2s;
    margin-top: 1rem;

    &:hover {
      background-color: crimson;
    }
  `;

  const clickButton = () => {
    console.log('button clicked!');
    setCount((currentCount) => currentCount + 1);
  };

  return html`<button class="${buttonClass}" onClick="${clickButton}">
    ${children}
  </button>`;
};

```

Ohh, so you are wondering what's happening? Don't freak, let me explain:

1. First, we import `css` and `html` from z.js, `css` is a function that takes a CSS template literal and returns a class name that you can use on your class attribute. It automatically creates those styles you define on that class with css tag function and makes sure they are not recreated if they have not changed. It's like a builtin css-in-js solution. Just write CSS, z will handle the rest, and then similarly, the `html` is a function that takes a template literal and returns an HTML element out of it. You can use it to render your components, and it returns a normal dom element with all events bound, like onclick event in this example.
2. Since these are just literals, we use `${__expression__}` syntax to interpolate the values; in this case, we are interpolating the value of `children` and `setCount`, which are the props passed to the component, and we are also interpolating the `clickButton` function which is the event handler for the button.
3. We then export our Button function or component for re-usability; that's it.

Congratulations! You have just created your first Z Js component. Now, let's use it on a page. Let's see how a home page with a button looks, along with some other concepts, state and routing.

> ✅ Global State Management <a name="global-state"></a>

Here is how you would manage complex state in your z applications, create a file say store.js and define and export your global states, these you can then import and use elsewhere in your app components, no need to wrap into any providers or contexts. It's that dead simple as illustrated below.

```js

import { createStore } from 'z-js-framework';

export const countStore = createStore(100);

export const authStore = createStore(false);

// there's a lot you can do, channel.getHistor() for example gets the store state history upto 10 previous versions
const { getValue, setValue, subScribe, channel } = createStore({
  name: 'z-js-framework',
  age: 1,
});

// access store state
console.log(countStore.getValue()); // 100

// run everytime state changes
authStore.subScribe((newState) => {
  console.log('auth changed::', newState);
});
```

then in any component you can just do something like...

```js
import {
  html,
  reactive,
  useEffect,
  useStore,
  useRouter,
} from 'z-js-framework';
import { authStore } from '../store.js';

export const AuthComponent = () => {
  const [user, setUser] = useStore(authStore);

  const router = useRouter();

  useEffect(() => {
    if (!user.value) {
      router.goTo('/login');
    }
  }, []);

  let UI = html`
    <div>
      <h1>Hello, ${user.value.userName}</h1>
      <button onclick="${() => setUser(null)}">Logout</button>
    </div>
  `;

  return reactive(UI);
};
```

The only thing to note here is we import useStore and pass in the store, it makes the state available to the component, and we can use it as a normal state variable within the component, and we can of course update it efficiently, all state updaets are granular and only affect their respective components. You can learn more about how state is handled and other interesting things you can do, z is powered by [State Radio](https://www.npmjs.com/package/state-radio) wrapped under hood for more simplicity but all state radio features can be accessed otherwise via the exposed state channels.

otherwise let's see in details how state works then on component level...

> ✅ Component Level State Management <a name="components-state"></a>

```js
import { css, html, useEffect, useState } from 'z-js-framework';
import { Button } from '../components/button.js';

export default function Home() {
  // handle state
  const [userName, setUserName] = useState('Z js Framework!');
  const [count, setCount] = useState(0);

  function handleInput(event) {
    setUserName(event.target.value);
  }

  // define the markup
  const home = html`<div>
    <h1>${userName.value}</h1>
    <p id="count">count: ${count.value}</p>
    <input
      type="text"
      class="some-class"
      placeholder="just type something..."
      onChange="${handleInput}" />
    <!-- Button Component Usage -->
    <div class="flex-item">${Button('+ Add One', setCount)}</div>
  </div>`;

  // react to state changes
  useEffect(() => {
    console.log('count changed::', count.current());
    let countElement = home.querySelector('#count');
    countElement.innerHTML = `count: ${count.current()}`;
  }, [count]);

  // return the home element
  return home;
}

```

Well, what's happening here? let's try to understand the code above.

1. We again import different stuff from the Z Js framework. These are like hooks or utility functions, each doing a well-defined thing.

2. We import the Button component from the components directory. We can also import other components from other directories; it's just a convention to keep all your components in a components directory. We already saw how such a component is made in previous steps!

3. Since we already know about the HTML and CSS functions, let's look at the new ones here: useState and useEffect. These are much inspired by those of React, but make no mistake—they're quite different in how they work. This is not React!

4. The useState returns the state object and a state setter, e.g. count and setCount. The state object has 2 properties that you can use for now: the value and current. The value is the current value of the state, the current is a function that returns the current value of the state, so you can use it to get the current value of the state, and the setter is a function that takes a new value and updates the state, so you can use it to update the state.

    The state setter is useful when you want to update the state from a function or you want to update the state from a child component. While the current function on the state object is useful when you want to get the current value of the state from a child component or in a series of component and state lifecycle, basically in useffect use state.current() to access state's current value, not just state.value, you will be good.

5. The useEffect is a function that takes a function and an array of state object dependencies. It's called when the dependencies change, and it's called after the component is rendered, so you can use it to react to state changes. You can also use it to fetch data from an API upon some change of state or do any other side effects, but make no mistake. Unlike react, this one only runs when the state changes. It's not run on render of component. It's like an event listener, which only happens when something happens, say, a change of state in this case.

    Otherwise, if an empty state dependencies array is provided, the provided function is run only once and for all on component load. Otherwise, it would rerun this function every time any of the provided state-dependent objects change or never if they never change!

6. Notice how we manually select the parts we want to update on state change from our home element and change its inner HTML. This is real DOM manipulation. The framework doesn't handle this for you as of now. You update what you want to update as you see fit, just like you would in vanilla JS. This is just a bit simplified, but not a replacement.

7. Notice how we use state.current() inside the useEffect. This ensures we get the latest value of this state object; otherwise, state.value would be the old value of the state object, which would be the value of the state object at the time the component was rendered.

8. State and state setters can be passed to child components as you see how setCount is being passed to the Button component.

9. Unlike vanilla js literals here we can define our literals and attach events all at once, it's like jsx + template literals = jsx literals kind of, you see we attach the onChange handler on the input, and we do this by directly referencing the handleInput function, under the hood z js will create a real dom element out of this template and attach this as it should be, given in it's there in the component scope, or passed as an argument.

10. All component or page functions in z return the created element, thats how we are able to reuse them and render them in the dom.

Almost that's all of Z as of now. Just one last thing, though...
This next part is how you link between pages.

> ✅ Navigation <a name="navigation"></a>

```js
import { html, useRouter } from 'z-js-framework';

export default function Layout() {
  const { getParam } = useRouter();
  let blogId = getParam('blogId');
  console.log('param::', blogId);

  return html`
    <section>
      <h1>Layout Page</h1>
      <p>This is the about page.</p>
      <div>
        <z-link to="/">Home</z-link>
        <z-link to="/about">About</z-link>
        <z-link to="/about" target="content">Layout view</z-link>
        <a href="https://www.google.com">Google</a>
      </div>
      <main id="content">-- dynamic content view --</main>
    </section>
  `;
}

```

So here we are doing a few things. Building on old concepts, we import the useRouter function from Z Js, and we use it to get the getParam function; this function takes a key as an argument and returns the value of the key in the URL. In this case, we are getting the blogId from the URL, we log it to the console, and then we return the template. We have a div with links to other pages and a main element with id content, and this is where we will render the dynamic content view.

1. We use z-link to create links to other pages. It's a Z Js custom element that works with the router to route between pages. You pass the target attribute to it, which is the ID of the element in which you want to render the content. In this case, we are rendering the content in the main element with id content.
2. Or the to attribute to it, which is the URL you want to route to. In this case we are routing to the about page or home page.
3. Normal a anchor tag links work just fine, they will route to the URL you pass them as normal as they should.

## ♻️ Reactivity

As with many modern frameworks, they are able to automatically re-render the app UI when the state changes, and they do this in kinda different ways, usually using the virtual dom to make sure only minimum changes are applied to the real dom. This is way better and more efficient than just saying element.innerHtml = newHtml, but then z is just real dom. We have no virtual dom, so you either have to do this step manually inside a useEffect or we reached out to some great library [Morphdom](https://github.com/patrick-steele-idem/morphdom) to enable us to do this in a smart way but with real dom, not virtual dom. You don't have to do anything on your end; you just wrap your component literal in a callback in our reactive function like below, and it will automatically reflect changes on state change. So cool, right? Here is an example:

> ✅ Reactivity <a name="reactivity"></a>

```js
import { html, reactive, useState } from 'z-js-framework';

export default function SomeComponent() {
  const [userName, setUserName] = useState('Kizz');

  const SomeElement = () => html`
    <div>
      <h1>UserName Is: ${userName}</h1>
      <input
        type="text"
        value="${userName}"
        onChange="${(e) => setUserName(event.target.value)}" />
    </div>`;

  return reactive(SomeElement);
}
```

Up above, the username will always change to a new value as the user types into the input.

## 🗃️ Hooks And Utilities

-- useSuspense: this hook helps you show a loading ui or fallback and then load the content when it's ready. useful when feteching data from an api or something.
It just takes in the promise or fetch function or any async one and a fallback element, and it will return the resolved value of the promise or the fallback element if the promise rejects. It can take retry, maxRetries and retryDelay as options, and it doesn't retry by default otherwise it retries 3 times by default when retry option is set to true.

> ✅ Hooks <a name="hooks"></a>

```js
import { html, useSuspense } from 'z-js-framework';

const fallback = html`<p>Loading... chill for now!</p>`;

export default function Demo() {
  const demoElement = html`
    <div>
      <h1>Example of a suspension...</h1>
      ${useSuspense(fetchContent, fallback)}
    </div>
  `;

  return demoElement;
}

function fetchContent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        const content = html`<p>This is the loaded content.</p>`;
        resolve(content);
      } else {
        reject('Failed to load content!!!');
      }
    }, 2000);
  });
}
```

That shows loading, and then bingo shows the content.

## 🌲 Rendering Lists

Z Js has a few helpers to help you render lists or array of items. This is very useful when you working with a list of items or iterable data and you rendering them in a restrictive semantic element say a table or that you want to maintain the structure of the elements in dom exactly, i.e if elements a to be exactly direct children of the parent element, most frameworks provide helpers here such as the v-for in vue, etc. Here is how you can go about it in z.

> ✅ Rendering Lists <a name="lists"></a>

```js
import { html, useState, List, reactive } from 'z-js-framework';
export default function TodosPage() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: 'something cool',
      completed: true,
    },
    {
      id: 2,
      task: 'something again',
      completed: false,
    },
  ]);
   let UI = () => html`
        <table class="todos-table">
          <tbody ref="todoRef">
            ${List({
              ref: 'todoRef',
              items: todos,
              render: ({ item: props }) => TodoItem({...props}),
            })}
          </tbody>
        </table>`
   return reactive(UI);
}
```

As you can see, the `List` utility takes in a few options, the ref is the ref of the parent element, items is the array of items to render, and render is the function that renders each item, it should return a single element and takes in each item in the items array as item which you can even alias as props.

### 📥 Fetching

> ✅ Fetching Data <a name="fetching"></a>

Z Js is trying to be a responsible framework not letting you in a madness of extra tools to do common things and basic things that you need to do with almost every project, we instead make those as separate packages which we then have builtin so that you don't have to reach out to external libraries to achieve those common functionalities, sure there's when you must reach to external libraries but with z, not all the time, so here we have builtin fetch api wrapper with all advanced featurs you might need, use libs like axios for fetching at your own will but we got you covered, here is how you can do fetching in z applications.

### GET Request

``` js
import { GET } from 'z-js-framework';

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
import { POST } from 'z-js-framework';

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
import { PUT } from 'z-js-framework';

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
import { PATCH } from 'z-js-framework';

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
import { DELETE } from 'z-js-framework';

const deletePost = async () => {
   const { error } = await DELETE('https://jsonplaceholder.typicode.com/posts/1');
  if (!error) {
    console.log('item deleted successfully!');
  } else {
    console.error('Error Deleting Item:', error.message);
  }
}
```

### Setting Global Configuration

```js
import { setConfig, GET } from 'z-js-framework';

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
import { GET } from 'z-js-framework';

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

You can of course do a lot more, see our mighty [Z-Fetch](https://github.com/Z-Js-Framework/z-fetch) for complete docs on what you can do, all nitty gritties covered.

Enjoy buildinga cool things with z js, that's it for now, we are working on more docs and examples, stay tuned!

## 😇 What if You want more?

Come on, more stuff is coming, and if you reach all the way here, you are really a samurai now. You can start using Z Js to build your next app. See the examples folder for some examples, as we prepare more docs later, but that's it for now, that's Z Js framework, let's get building!

More documentation and examples of common use cases will be coming soon. Help contribute!

## ✍️ Authors <a name = "authors"></a>

- [@HusseinKizz](https://github.com/Hussseinkizz) - Z Js Creator

You can also see the full list of all awesome [contributors](https://github.com/Z-Js-Framework/z-js/graphs/contributors) who participated on this awesome project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Shout out to [Kimmy Davis](https://github.com/KimmyDavis) for making the first coolest z js app, an audio player that actually works: [z shot-wave](https://z-shot-wave.netlify.app/) oof!
- Shout out to [Bakunga Bronson](https://github.com/BakungaBronson) for making the first external pr and z js tailwind css demo!
- Shout out to [Rasmus Schultz](https://x.com/mindplaydk) for making the first criticism about z's rendering and advising on the subsquent re-rendering improvements we have been making, he has benchmarked all vdom algorithms for example and has helped alot to see z improve to such heights too, a journey we still on!
- React, Vue, And Solid Frameworks for inspiring Z js Framework and pioneering some of the paradimns adaptod here.
- shout out to [Morphdom](https://github.com/patrick-steele-idem/morphdom) it is great dom diffing library and we used it to handle dom diffing efficiently!
- Finally [Pionia Framework](https://pionia.netlify.app) also deserves a shout out for being the first backend framework to support z js out of the box, check it out, they really got some cool stuff there!
- Thanks all friends who contributed thogugh wise to guide the z philosophy and approach.

## 👾 What Next?

Well, this is still work in progress. I am working on it in my little free time, so if you have other ideas or what, reach out to me at [hssnkizz@gmail.com](hssnkizz@gmail.com) or read [Contribution Guide](./CONTRIBUTION.MD) to get started on how things work and the whole project plan and roadmap!
