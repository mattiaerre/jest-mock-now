module.exports = (date) => {
  const _ = 1479427200000; // 2016-11-18 00:00:00.000;
  const now = date ? date.getTime() : _;
  Date.now = jest.fn(() => now);
};
