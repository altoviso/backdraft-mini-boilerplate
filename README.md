# backdraft-mini-boilerplate

This application includes a minimal Backdraft application that renders a `div` absolutely sized and positioned to cover exactly the available viewport and then renders a `p` with "hello, world" in the middle of that `div`.

A minimal Express server is included that serves the `public` directory and the `node_modules` directory.

## Installation

```
$ git clone https://github.com/altoviso/backdraft-mini-boilerplate.git
$ cd backdraft-mini-boilerplate
$ npm install
```

## Running the server

From the project root directory, execute...


```
node server/httpServer
```

## See the Application in the Browser

After starting the server, open a modern browser and navigate to...

```
http://localhost:3002/index.html 

```

## Design

The application, a single-page application, is started by loading the document `index.html` in the browser. `index.html` includes:

1. A style sheet (`public/css/main.css`).
2. A `div` node with the `id===root`.
3. A single script, located at `public/src/main.js`, that creates Backdraft components and "injects" them into the document.

We consider it a best practice to create a script named `lib.js` (typically located in the root of the source tree) that exports definitions commonly used by application modules. For this trivial application `lib.js` simply re-exports all of the Backdraft machinery. See [Tutorial - Getting Started](http://backdraftjs.org/tutorial/1-getting-started.html) for a longer explanation.

`main.js` imports Backdraft's `render()` and `e()` functions, then uses Backdraft to render a `div` containing a `p` containing `hello, world` and attaches the rendered DOM tree to the node with the `id` `root` that is defined by `index.html`.

