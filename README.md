# hypermorphic ![build status](https://travis-ci.org/WebReflection/hypermorphic.svg?branch=master)

[![Greenkeeper badge](https://badges.greenkeeper.io/WebReflection/hypermorphic.svg)](https://greenkeeper.io/)

An isomorphic [hyperHTML](https://viperhtml.js.org/hyper.html) &amp; [viperHTML](https://viperhtml.js.org/viper.html) importer, compatible with bundlers.

```js
// ESM example (assuming bundlers/ESM loaders in place)
import {bind, wire} from 'hypermorphic';

// CommonJS example
const {bind, wire} = require('hypermorphic');
```

### Bundlers

Please have a look at the [example](https://github.com/WebReflection/hypermorphic/tree/master/example) folder to find out how to configure your favorite bundler to load _hyperHTML_ on the client side, fully ignoring _viperHTML_.

### Examples

You can clone this repository, enter in the `example` folder,
pick one of the solutions and then run `npm install`.

You can reach `http://localhost:8080/` to see a page
powered by _hyperHTML_ on the client and _viperHTML_ on the server.
