const { join } = require('node:path');
const fs = require('fs-extra');

module.exports = async (ctx, next) => {

  const { projectName } = ctx.request.body;
  const projectDir = join(process.env.PROJECTS_FOLDER, projectName);

  try {
    // 默认项目不能删除
    if (projectName !== 'defaultProject') {
      await fs.remove(projectDir)
      console.log('删除成功')
      ctx.body = 'ok'
    } else {
      ctx.body = 'failed'
    }
  } catch (err) {
    console.error(err)
  }
}