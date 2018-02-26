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

test('init function returns the used `now` value', () => {
  expect(index()).toEqual(NOW);
  const now = new Date('2017-06-22');
  expect(index(now)).toEqual(now.getTime());
});

test('Date.now() to match snapshot w/ options', () => {
  const now = new Date('2017-06-22');
  index(now);

  expect(Date.now()).toEqual(now.getTime());
  expect(Date.now()).toMatchSnapshot();
});

test('Date.now, as a mock function, exposes mockRestore()', () => {
  const mocked = Date.now();
  Date.now.mockRestore();
  const real = Date.now();
  expect(real).toBeGreaterThan(mocked);
});
