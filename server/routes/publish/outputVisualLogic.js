const fs = require('fs-extra');
const { join } = require('node:path');
const UglifyJS = require("uglify-js");

module.exports = async (projectName, workspaceData, options) => {
  const logicDir = join(process.env.PROJECTS_FOLDER, `${projectName}/assets/js/visual_logic.js`);
  const jsData = {};

  workspaceData.forEach(async (item) => {
    const { title, js } = item;
    jsData[title] = js;
  });

  let logicStr = `// 此文件自动生成，请勿修改
console.log('Block3D-一款免费的零代码Web3D开发工具www.zjbku.com');
'use strict';
const appInstance = BABYLON.apps[0];
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
  try {
    if(options.enableMinifyJSFile) {
      const logicStrMin = UglifyJS.minify(logicStr);
      return await fs.outputFile(logicDir, logicStrMin.code);
    }else{
      return await fs.outputFile(logicDir, logicStr);
    }
  } catch (e) {
    console.log(e);
  }
}