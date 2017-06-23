# jest-mock-now

`Date.now()` as deterministic [Jest mock function](https://facebook.github.io/jest/docs/mock-functions.html).

```bash
➜ ~ yarn add jest-mock-now -D
```

```javascript
require('jest-mock-now')();

console.log(Date.now()); // 1479427200000
```
