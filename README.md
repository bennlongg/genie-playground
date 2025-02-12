![](https://i.imgur.com/A86vC6q.png)
# electron-react-boilerplate

_**I am looking for community support to help move this project forward. As it currently stands, I'm unable to keep up with the workload on my own. See the [Roadmap](https://github.com/pbarbiero/enveed/blockers) for the latest blockers.**_

> Electron application boilerplate based on Passcards and React

## Install

```bash
$ git clone git@github.com:pbarbiero/electron-react-boilerplate.git YourNewApp
$ cd YourNewApp
$ npm install
$ npm run dev
```

## DevTools

The keyboard shortcuts are:

* Mac: <kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>I</kbd>
* Linux/Windows: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>

> Note: DevTools are only accessible in development for now.


## Dev

Read the `tasksfile.js` documentation to learn more about using `Electron`, `React`, `Sass/Scss`, `Buble/ES6` in development and in production environments.

```bash
$ npm run dev -- start your application for development
$ npm run build -- build your application for production
$ npm run build-dev -- build your application for development with (almost) the same settings as `npm run build`
$ npm run start -- starts production bundle, _You have to build it first_: `npm run build`
```

## Pack

Read the `tasksfile.js` documentation to learn more about using `electron-builder` to pack your app for distribution.

* _NPM / MacOS / Windows_...

```bash
$ npm run pack:mac
$ npm run pack:win
```

* _Yarn (OS Cleaver. (install on mac:npm install -g os-cleaver. WIN: https://chocolatey.org/packages/os-cleaver/))_

```bash
$ yarn pack:os
``` 

## Contribute

If youi want to to contribute, please read the [contributing file](contributing.md). You can help in different ways:

* [report bugs](https://github.com/pbarbiero/electron-react-boilerplate/issues) / [Open an issue](https://github.com/pbarbiero/electron-react-boilerplate/issues)
* [Open a feature request](https://github.com/pbarbiero/electron-react-boilerplate/issues)
* [Improve documentation](https://github.com/pbarbiero/electron-react-boilerplate/issues)
* [Fix bugs and/or fork this project](contributing.md)
* [Tweet about this project](https://twitter.com/)