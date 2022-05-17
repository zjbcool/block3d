const open = require('./open');
const { join } = require('node:path');

module.exports = async (ctx, next) => {
  const projectName = ctx.request.body;
  try {
    ctx.body = await open(join(process.env.PROJECTS_FOLDER, projectName));
  } catch (e) {
    console.log(e);
  }
}

