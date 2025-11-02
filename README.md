# react-toolchains-playground

Learning and exploring build toolchains and bundlers in the context of a React app: Vite, webpack, esbuild, etc.


## Overview

Learning the concepts, patterns and APIs of React is hard enough. Learning how to build a React app (JSX transpilation,
bundling, dev server, etc.) is its own challenge. This repository is my own reference for building React apps with the
various popular build toolchains and bundlers. By contrast, <https://github.com/dgroomes/react-playground> is where I
explore React itself.

**NOTE**: This project was developed on macOS. It is for my own personal use.


## Standalone subprojects

This repository illustrates different build toolchains and bundling approaches via standalone subprojects. Each subproject is
completely independent of the others and do not depend on the root project. This _standalone subproject constraint_
forces the subprojects to be complete and maximizes the reader's chances of successfully running, understanding, and
re-using the code.

The subprojects include:


## `zero-build-cdn/`

A *zero-build-step* React project implemented with Babel's in-browser compiler `@babel/standalone`. This is React *the CDN way*.

See the README in [zero-build-cdn/](zero-build-cdn/).


## `vite/`

A React project built with [Vite](https://vitejs.dev/). It features TypeScript.

See the README in [vite/](vite/).


## `webpack/`

A React project built with [webpack](https://webpack.js.org/). It features TypeScript and `ts-loader`.

See the README in [webpack/](webpack/).


## `esbuild/`

A bare-bones React and TypeScript project built with [esbuild](https://esbuild.github.io/).

See the README in [esbuild/](esbuild/).


## Wish List

General clean-ups, todos and things I wish to implement for this project:

* [ ] Consider bringing my Next.js <https://github.com/dgroomes/nextjs-playground> content into here. 
