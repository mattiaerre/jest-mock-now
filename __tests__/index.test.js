const index = require('../');

test('Date.now() to match snapshot w/o options', () => {
  const _ = 1479427200000;
  index();

  expect(Date.now()).toEqual(_);
  expect(Date.now()).toMatchSnapshot();
});

test('Date.now() to match snapshot w/ options', () => {
  const now = new Date('2017-06-22');
  index(now);

  expect(Date.now()).toEqual(now.getTime());
  expect(Date.now()).toMatchSnapshot();
});
