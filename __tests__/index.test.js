const index = require('../');

test('oh noes!', () => {
  expect(() => { index(); }).toThrowErrorMatchingSnapshot();
});
