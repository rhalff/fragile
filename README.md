# Fragile

This is a fragile [weak](https://github.com/TooTallNate/node-weak) implementation which can be used in node.js and v8 based browsers.

In able to run this code you should use the v8 `expose-gc` and `allow-natives-syntax` flags.

**Chrom(e|ium):**
```
chromium-browser --js-flags="--expose-gc --allow-natives-syntax"
```

**Node.js:**
```
node --expose_gc --allow_natives_syntax
```

**Usage:**

*Referenced:*
```js
const fragile = require('fragile')

let myObject = {be: 'test'};

const myObjectIsLeaking = fragile.weak(myObject)

fragile.gc()

myObjectIsLeaking() // true
```

*Dereferenced:*
```js
const fragile = require('fragile')

let myObject = {be: 'test'};

const myObjectIsLeaking = fragile.weak(myObject)

myObject = null

fragile.gc()

myObjectIsLeaking() // false
```

