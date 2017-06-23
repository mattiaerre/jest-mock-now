const index = require('../');
const { NOW } = require('../constants');

test('Date.now() from `setup-jest` to match snapshot w/o options', () => {
  expect(Date.now()).toEqual(NOW);
  expect(Date.now()).toMatchSnapshot();
});

test('Date.now() to match snapshot w/o options', () => {
  index();

  expect(Date.now()).toEqual(NOW);
  expect(Date.now()).toMatchSnapshot();
});

test('Date.now() to match snapshot w/ options', () => {
  const now = new Date('2017-06-22');
  index(now);

  expect(Date.now()).toEqual(now.getTime());
  expect(Date.now()).toMatchSnapshot();
});
