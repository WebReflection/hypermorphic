# hypermorphic

An isomorphic [hyperHTML](https://viperhtml.js.org/hyper.html) &amp; [viperHTML](https://viperhtml.js.org/viper.html) importer, compatible with bundlers.

```js
// ESM example (assuming bundlers/ESM loaders in place)
import {bind, wire} from 'hypermorphic';

// CommonJS example
const {bind, wire} = require('hypermorphic');
```

### Example

You can clone this repository, enter in the `example` folder,
type `npm install` followed by `npm run bundle` and `npm start`.

After reaching `http://localhost:8080/` you'll see a page
powered by hyperHTML on the client and viperHTML on the server.
