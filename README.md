# jest-mock-now

`Date.now()` as deterministic [Jest mock function](https://facebook.github.io/jest/docs/mock-functions.html).

## Install

```bash
➜ ~ npm install --save-dev jest-mock-now
```

## Usage

It is possible to use the following configurations at every setup level; in a `setupJest.js` file as well as in a `beforeEach` or a `test` function as shown [here](__tests__/index.test.js).

```javascript
const timestamp = require('jest-mock-now')();

console.log(Date.now()); // 1479427200000
```

or

```javascript
const now = new Date('2017-06-22');

console.log(Date.now()); // 149808960000
```
To set the proper date include the time stamp in the string, otherwise jest-mock-now will set the date for the prior date at midnight (i.e. 2017-06-21 00:00:00).

```javascript
const jestMockNow = require('jest-mock-now');
const now = new Date('2017-06-22 00:00:01'); // add 00:00:01 to the Date string parameter
jestMockNow(now);
```

The `jest-mock-now` function returns the timestamp used to mock the `Date.now` method:

```javascript
const timestamp = require('jest-mock-now')(new Date('2017-06-22'));

console.log(timestamp); // 1498089600000
console.log(Date.now()); // 149808960000
```

If you need to restore the original `Date.now()` method, you can call `mockRestore()`.

```javascript
Date.now.mockRestore();
```
