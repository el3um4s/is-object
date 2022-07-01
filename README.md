# isObject

Checks if a value is an object

NPM link: [@el3um4s/is-object](https://www.npmjs.com/package/@el3um4s/is-object)

### Install and use the package

To use the package in a project:

```bash
npm i @el3um4s/is-object
```

and then in a file:

```js
import isObject from "@el3um4s/is-object";

const a = { hello: "world" };

console.log(isObject(a));
// true

const b = "hello world";
console.log(isObject(b));
// false
```
