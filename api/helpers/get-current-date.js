module.exports = {
  friendlyName: 'Get current date',
  description: 'Get the current date and time as a string.',
  sync: true,
  fn: function () {
    return new Date().toISOString();
  }
};
