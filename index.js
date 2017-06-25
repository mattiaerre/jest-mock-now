const { NOW } = require('./constants');

module.exports = date => {
  const now = date ? date.getTime() : NOW;

  Date.now = jest.spyOn(Date, 'now').mockImplementation(() => now);
};
