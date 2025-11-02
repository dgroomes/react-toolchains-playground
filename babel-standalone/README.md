# babel-standalone

A *zero-build-step* React project implemented with Babel's in-browser compiler `@babel/standalone`. This is React *the CDN way*.


## Overview

React and Babel are loaded from CDNs. React is loaded from <https://esm.sh> using import maps, while Babel is loaded from
<https://unpkg.com/> as a script tag. Babel transpiles the JSX source code on-the-fly in the browser.

This project was originally scaffolded using the example project in the *old docs* incarnation of <https://reactjs.org/docs/add-react-to-a-website.html>.
Unfortunately, the *new docs* (which is what the link will bring you to today) do not offer any information about using
React/JSX in a browser without a build step. Or in other words, React doesn't seem to endorse React *the CDN way*
anymore. This is a bummer.


## Instructions

Follow these instructions to serve the app (rejoice in the fact that there's no build step!):

1. Serve the source code:
   * ```shell
     python3 -m http.server --directory src/
     ```
   * Note: If you are on macOS then Python 3 and its built-in modules are already installed on your computer. Pretty
     neat way to get a simple server up and running.
2. Open the browser!
   * Open <http://[::]:8000/> in your browser


## Wish List

General clean-ups, todos and things I wish to implement for this project:

* [x] DONE De-scope all the "GitHub Pages dynamic viewing" features. I still like the
  functionality, but I had already ported it to a standalone project: <https://github.com/dgroomes/github-pages-dynamic-viewer>
  and I did this because I want to focus specifically on "React/JSX the CDN way" which is already enough to demo in a
  single subproject.
* [x] DONE Deal with React 19's discontinuation of a UMD distribution: <https://react.dev/blog/2024/04/25/react-19-upgrade-guide#umd-builds-removed>
  The solution uses ESM bundles from esm.sh with import maps, combined with Babel standalone's `data-type="module"` attribute.
* [x] DONE Upgrade Babel.
* [ ] Rename to "zero-build-cdn" because now it's Babel, and esm.sh, not just Babel. Plus this is a catchier name.
* [ ] SRI (subresource integrity) on the esm modules.


## Reference

* React <https://reactjs.org/> *A JavaScript library for building user interfaces*
* Babel <https://babeljs.io/> *The compiler for next generation JavaScript*
