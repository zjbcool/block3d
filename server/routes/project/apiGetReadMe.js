const { join } = require('node:path');
const fs = require('fs-extra');
const { marked } = require('marked');


module.exports = async (ctx, next) => {
  const { projectName } = ctx.request.body;
  const readmeDir = join(process.env.PROJECTS_FOLDER, projectName, 'README.md');

  try {
    // 读取项目根目录下的README.txt
    const exists = await fs.pathExists(readmeDir);
    if (exists) {
      const result = await fs.readFile(readmeDir)
      const html = marked.parse(result.toString());
      ctx.body = html;
    } else {
      ctx.body = '';
    }
  } catch (e) {
    console.log(e);
  }

}