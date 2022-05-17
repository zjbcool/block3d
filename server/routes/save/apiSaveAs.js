const { join } = require('node:path');
const fs = require('fs-extra');

module.exports = async (ctx, next) => {
  const { projectName, newProjectName } = ctx.request.body;
  const projectDir = join(process.env.PROJECTS_FOLDER, projectName);
  const newProjectDir = join(process.env.PROJECTS_FOLDER, newProjectName);

  try {
    await fs.copy(projectDir, newProjectDir);
    console.log('另存成功')
    ctx.body = 'ok'
  } catch (err) {
    console.error(err)
  }
}