# jest-mock-now

`Date.now()` as deterministic [Jest mock function](https://facebook.github.io/jest/docs/mock-functions.html).

## Install

```bash
➜ ~ yarn add jest-mock-now -D
```

## Usage

It is possible to use the following configurations at every setup level; in a `setupJest.js` file as well as in a `beforeEach` or a `test` function as shown [here](__tests__/index.test.js).

```javascript
require('jest-mock-now')();

console.log(Date.now()); // 1479427200000
```

or

```javascript
const now = new Date('2017-06-22');

require('jest-mock-now')(now);

console.log(Date.now()); // 1498089600000
```

If you need to restore the original `Date.now()` method, you can call `mockRestore()`.

```javascript
Date.now.mockRestore();
```
