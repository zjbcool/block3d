const { join } = require('node:path');
const fs = require('fs-extra');

module.exports = async (ctx, next) => {
  const { projectName, workspaceData } = ctx.request.body;
  const jsonData = {};
  const jsData = {};

  workspaceData.forEach(async (item) => {
    const { title, id, type, data, js } = item;
    jsonData[title] = { type, data };
    jsData[title] = js;
  });

  try {
    // 写入workspace.json
    const dir = join(process.env.PROJECTS_FOLDER, `${projectName}/workspace.json`)

    await fs.outputJSON(dir, jsonData, { spaces: 2 });
    console.log(`成功保存-> ${dir}`);

    let logicStr = `// 此文件自动生成，请勿修改
'use strict';
// const appInstance = BABYLON.apps[0];
`;
    Object.keys(jsData).forEach(title => {
      if (title === 'setting') {
        return;
      } else if (title === 'main') {
        logicStr += `
// main tab
(()=>{
  ${jsData[title]}
})();

`
      } else {
        logicStr += `
/**
 * ${title} tab
 * @param {any} tab_arg
 */
function tab_${title}(tab_arg) {
  ${jsData[title]}
}

`
      }
    });
    ctx.body = logicStr; // 返回代码
  }
  catch (e) {
    console.log(e);
  }
}
