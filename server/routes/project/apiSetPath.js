const fg = require('fast-glob');

module.exports = async (ctx, next) => {

  try {
    const entries = await fg('*', {
      onlyDirectories: true,
    });
    return entries

  } catch (err) {
    console.error(err)
  }
}
