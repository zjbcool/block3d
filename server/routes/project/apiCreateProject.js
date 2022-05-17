const { join } = require('node:path');
const fs = require('fs-extra');

module.exports = async (ctx, next) => {
  const { projectName, description } = ctx.request.body;
  const templateDir = join(process.cwd(), 'templates/default');
  const projectDir = join(process.env.PROJECTS_FOLDER, projectName);
  const readmeDir = join(projectDir, 'README.md');

  try {
    // 拷贝默认模板
    const exists = await fs.pathExists(projectDir);
    if (exists) {
      console.log('路径已存在!');
      ctx.body = 'failed';
      return;
    }
    await fs.copy(templateDir, projectDir);
    // 如果新建项目时写入了描述，则在项目根目录下创建README.md
    description && await fs.outputFile(readmeDir, description)
    ctx.body = 'ok';
  } catch (e) {
    console.log(e);
  }

}