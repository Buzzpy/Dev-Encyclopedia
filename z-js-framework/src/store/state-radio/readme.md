# State Radio 📻

A state management library that let's you tune to your state channels via subscriptions and listen to state updates with fine tuned simplicity.

Originally made to scale state management in [Z-js framework](https://github.com/javaScriptKampala/z-js) but anyone can use, as a seprate simple package, it's implemented in purely vanilla js to allow flexibility of adapting this is any other frameworks apart from Z-js, for exmple with react, see [state-radio-react](https://github.com/Hussseinkizz/state-radio-react) it's relatively simple to integrate in any js environment.

In fact, if you know how a home radio set works, you surely know how this works already, but don't take my word for it, let's show you around...

if you just want to test out and follow along with what we are about to go through, you can try this little live playground: [demo](https://stackblitz.com/edit/state-radio-example?file=main.js)

otherwise, enough talks, let's dive in...

## 🔥 Features

- **🔄 Framework-Agnostic:** Use with any frontend framework or library of your choice, vanilla or react or what, it all works.
- **🚀 Simple API:** A straightforward API for quick integration and ease of use, create a channel, subscribe if you want, update state, do anything, enjoy the flexibility!
- **🤯 Automatic Subscriptions:** Get State automatically subscribes to the state channel which saves you from explicitly subscribing to state un-necessarily, you can of course unsubscribe if you want to!
- **⏳ Asynchronous State Updates:** Supports asynchronous state updates and middlewares for complex state transformations or asynchronous workflows or data fetching that triggers state updates.
- **📜 State History:** Keeps track of state changes with a history feature, very useful for debugging and back tracing state changes.
- **⚙️ Middleware:** Can integrate middleware functions to customize state updates.
- **🔌 Plugin Support:** Easily extendable to enhance functionality with community plugins.
- **📯 State Of The Art:** Has no dependencies, scales with your application and remains performant, only updates channels which changed, the rest remains intact, it just works!

## ▶️ Installation

For vanilla js projects a [cdn import](https://cdn.jsdelivr.net/npm/state-radio@1.0.4/dist/state-radio.js) is recommended, otherwise you have to refrence the file exactly after installation for example:

```js

import { StateRadio } from './node_modules/state-radio/dist/state-radio.js';

```

while for others say in react or any build tooling based setup, say using vite, it's the usual stuff, just import from `state-radio` and the rest will be just fine and in that regards the steps is as follow:

```bash
npm install state-radio
```

### Usage And Initialization

``` javascript

import { StateRadio } from 'state-radio';

const { channels } = new StateRadio();
```

### Creating Channels

To create a channel, give it a channel name and initial state, it's recommended you put all your state management in a dedicated separate file, say store.js and export from there, but for simple ones, anywhere in your codebase can be just fine.

```javascript
// define some initial states
let nums = [1, 2, 3];
let user = {
  name: 'js',
  age: 20,
};

// add new state channels to radio
const numberChannel = channels.addChannel('numberChannel', nums);
const userChannel = channels.addChannel('userChannel', user);
```

### Using the channels and working with state

```javascript
// update number channel
numberChannel.setState((oldState) => [...oldState, 4]);

console.log('Number Channel State:', numberChannel.getState());

// update user channel
userChannel.setState((user) => ({ ...user, name: 'Kizz' }));

console.log('User Channel State:', userChannel.getState());

// and definitely you can, add a channel
channels.addChannel('uselessChannel', 'foobar!');

//  get a channel by name
let uselessChannel = channels.getChannel('uselessChannel');

console.log('Useless Channel State:', uselessChannel.getState());

// remove a channel if you want to.
let newChannels = channels.removeChannel('uselessChannel');

console.log('updated channels:', newChannels);

// or get all channels
let ourChannels = channels.getChannels()
console.log('our channels:', ourChannels);

```

pretty basic right? ok let's get a bit more serious...

### Asynchronous State

This one is not good to use for everything, but if you have asynchronous operations that affect state, it can be a good feature to use, for example

``` javascript
numberChannel.setStateAsync(async (oldState) => {
  let newNumber = await fetch('https://num-api/number/new');
  return [...oldState, newNumber]
})
  .then((updatedState) => {
    console.log('Async state updated:', updatedState);
  })
  .catch((error) => {
    console.error('Error updating state:', error);
  });

```

Note that the api `https://num-api/number/new` is just for demo purposes and doesn't actually exist but just shows how it would work out with an api call that returns a number which in return we use in state.

### State History

Get a list of previous state objects in the order they were applied in.

``` javascript

const previousStates = numberChannel.getHistory();
console.log(previousStates);

```

### Subscribing to state channels

To subscribe to a state channel, you define a callback which will be invoked or called whenever state changes and it will recieve the new state as a paremeter from from state radio channel, for example below, we will console log whenever this channel's state changes, this can be useful for running side effects, say updating the UI whenever the state it depends on changes.

```javascript

const callback = (newState) => console.log('Number channel changed to:', newState);

// Subscribe to state changes
numberChannel.subscribe(callback);

// unSubscribe from state changes if you have to.
numberChannel.unSubscribe(callback);

// explictly notify subscribers,
// this is done automatically but you can trigger it if you want
numberChannel.notifySubscribers()
```

### Using Middlewares

Middlewares intercept the state update process and mutate state before it get's commited to subscribers, this can be useful where you have post effects you want to run before actually changing state, say logging current state or doing something before you log out a user, etc. For example...

``` javascript

const addOneToEach = async (state) => {
  console.log('Async Middleware 1 Operating..');
  // add 1 to each num in state
  let newNums = state.map((n) => n + 1);
  // Simulate an asynchronous operation
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return newNums;
};

const removeOddNums = async (state) => {
  console.log('Async Middleware 2 Operating..');
  // add 1 to each num in state
  let newNums = state.filter((n) => n % 2 === 0);
  // Simulate an asynchronous operation
  await new Promise((resolve) => setTimeout(resolve, 500));
  return newNums;
};

// attach middlewares to channel
numberChannel.addMiddleWares(addOneToEach, removeOddNums);

// remove middlewares from channel
numberChannel.removeMiddleWares(removeOddNums);
```

Note, middlewares are run in the order they're given to `addMiddleWares` method, from left to right!

### Using Plugins, yes, extending the library functionality

As you guessed, sometimes one size doesn't fit all, and there we had to provide an extensible system, anyone in state radio community can write their own plugins and integrate them into the library, here is what the convention looks like:

``` javascript

// Create a logging plugin
const logging = {
  name: 'loggingPlugin',
  setter: {
    method: (state, options) => {
      // Add a 'logEntry' key with a timestamp to the state
      console.log('do something with state via plugin');
      console.log('log:', state, 'options:', options);
      return [...state, 100];
    },
    options: { cry: 'meow meow!!' },
  },
  getter: {
    method: (state, options) => {
      // No special behavior for getting in this example
      return state;
    },
    options: {},
  },
  // No exposes in this example, as it's a simple logging plugin
};

```

or you can do some stuff, for example...

``` javascript

import _useStorage from '@kizz-js/use-local-storage';

// local storage plugin
let localStorage = {
  name: 'localStorage',
  plugin: _useStorage,
  options: { storageType: 'session' },
  setter: {
    method: _useStorage.setState,
    options: { cache: true },
  },
  getter: {
    method: _useStorage.getState,
    options: {},
  },
  exposes: [{ name: 'onLocalChange', method: _useStorage.onChange }],
};
```

you can find the package `@kizz-js/use-local-storage` used in example as plugin here [_useLocalStorage 🪣](https://www.npmjs.com/package/@kizz-js/use-local-storage)

Note: every plugin should provide a setter and getter method and each of those should return new state, setter takes in current channel state and returns it after setting it and manipulating it as it wants, and getter returns one it retrieves from it's own mechanisms. And then each plugin can be used as below:

``` javascript
// add plugins when initializing a new state radio
const { channels } = new StateRadio({
  // plugins: [localStorage],
  plugins: [logging, localStorage],
});

```

plugins are applied in order their provided, ordering matters therefore.

## Example -- uses vanilla js and html

That was a roller coaster, now let's see a working example combining some of those concepts convered.

-- step 1, install state radio

```bash
npm install state-radio
```

-- step 2, create a file in your root directory, call it `todo.js` and put the following...

``` javascript

import { StateRadio } from 'state-radio.js';
const taskInput = document.querySelector('#taskInput');
const addTaskButton = document.querySelector('#addTaskButton');
const filterSelect = document.querySelector('#filterSelect');
const counterElement = document.querySelector('#counter');

addTaskButton.addEventListener('click', () => addTask(taskInput.value));
filterSelect.addEventListener('change', () => setFilter(filterSelect.value));

const { channels } = new StateRadio();

// Add a channel for tasks
const tasksChannel = channels.addChannel('tasks', []);
const counterChannel = channels.addChannel('counter', 0);

// Add a channel for visibility filter
const filterChannel = channels.addChannel('filter', 'all');

// Action to add a task
const addTask = (text) => {
  tasksChannel.setState((tasks) => [...tasks, { text, completed: false }]);
};

// Action to toggle task completion
const toggleTask = (index) => {
  tasksChannel.setState((tasks) =>
    tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    )
  );
};

// Action to set visibility filter
const setFilter = (filter) => {
  filterChannel.setState(filter);
};

let count = counterChannel.getState();

// Subscribe to tasks changes
tasksChannel.subscribe((tasks) => {
  // Update UI or trigger re-render
  console.log('Tasks Updated:', tasks);
  counterChannel.setState((count) => count + 1);
  counterElement.innerHTML = `Count: ${counterChannel.getState()}`;
});

// Subscribe to filter changes
filterChannel.subscribe((filter) => {
  // Update UI or trigger re-render based on filter
  console.log('Filter Updated:', filter);
  // Update UI based on filter
  let currentTasks = tasksChannel.getState();
  let filteredTasks = [];

  if (filter === 'completed') {
    filteredTasks = currentTasks.filter((task) => task.completed === true);
    updateTasksUI(filteredTasks);
  } else if (filter === 'active') {
    updateTasksUI(currentTasks);
  } else {
    updateTasksUI(currentTasks);
  }
});

// Update UI based on state changes
function updateTasksUI(tasks) {
  const tasksContainer = document.getElementById('tasksContainer');
  tasksContainer.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskElement = document.createElement('div');
    taskElement.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''} id="${index}">
        <span>${task.text}</span>
      `;
    tasksContainer.appendChild(taskElement);
    // Add onChange event listener to the checkbox
    const checkbox = taskElement.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => toggleTask(index));
  });
}

// Subscribe to tasks changes
tasksChannel.subscribe(updateTasksUI);

// Initial rendering
updateTasksUI(tasksChannel.getState());

```

and then create `todo.html` file and put

``` html

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Todo App</title>
  <script src="./todo.js" type="module" defer></script>
  <style>
    .flex-row {
      display: flex;
      gap: 1rem;
    }

    .flex-col {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  </style>
</head>

<body class="flex-col">
  <h1 id="counter">Count</h1>
  <div class="flex-row">
    <!-- Task input and add button -->
    <input type="text" id="taskInput" />
    <button id="addTaskButton">
      Add Task
    </button>
    <!-- Filter selection -->
    <select id="filterSelect">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="active">Active</option>
    </select>
  </div>

  <!-- Render tasks based on state -->
  <div id="tasksContainer"></div>


  <script>
    console.log('script enabled!')
  </script>
</body>

</html>

```

That's it, play around, enjoy the radio show!!!

But wait, what about using this in react? well see our guide on that here [state-radio-react](https://github.com/Hussseinkizz/state-radio-react) or if you just want to test out what we gone through, try this live playground: [demo](https://stackblitz.com/edit/state-radio-example?file=main.js)


## Contributing

If you find issues or have ideas for improvements, please open an issue or submit a pull request or contact author at [hssnkizz@gmail.com]('hssnkizz@gmail.com')

This project is licensed under the MIT License.
