const { join } = require('node:path');
const fs = require('fs-extra');
const dayjs = require('dayjs');
/**
 * 自动保存20条记录，超过则删除最早的一条
 */
module.exports = async (ctx, next) => {
  const { projectName, workspaceData } = ctx.request.body;
  const jsonData = {};
  const day = dayjs().format('YYYY-MM-DD-HH-mm-ss');

  workspaceData.forEach(async (item) => {
    const { title, type, data } = item;
    jsonData[title] = { type, data };
  });

  try {
    // 写入workspace.json
    const dir = join(process.env.PROJECTS_FOLDER, `${projectName}/workspace_backup/workspace-${day}.json`);
    await fs.outputJSON(dir, jsonData, { spaces: 2 });
    // console.log(`自动备份: ${dir}`);
    // 超过20条备份，删除最早的一条
    const files = await fs.readdir(join(process.env.PROJECTS_FOLDER, `${projectName}/workspace_backup`));
    if (files.length > 20) {
      await fs.remove(join(process.env.PROJECTS_FOLDER, `${projectName}/workspace_backup/${files[0]}`));
    }
    ctx.body = 'ok'
  } catch (e) {
    console.log(e);
  }
}