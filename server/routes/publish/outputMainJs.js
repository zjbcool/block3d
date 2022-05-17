
const fs = require('fs-extra');
const { join } = require('node:path');
const UglifyJS = require("uglify-js");
const { Preloader, App } = require('./mainjs');

// 创建main.js
module.exports = async (projectName, options) => {
  const mainStr = `
'use strict';

window.addEventListener('load', async () => {
  ${Preloader.toString()}
  ${App.toString()}

  let appInstance;
  BABYLON.apps = [];
  BABYLON.Preloader = Preloader;
  appInstance = new App('renderCanvas').setup();
  BABYLON.apps.push(appInstance);
  await BABYLON.Tools.LoadScriptAsync('./assets/js/visual_logic.js');
  appInstance.run();
});
`
  const mainDir = join(process.env.PROJECTS_FOLDER, `${projectName}/assets/js/main.js`);
  try {
    if (options.enableMinifyJSFile) {
      const mainStrMin = UglifyJS.minify(mainStr);
      return await fs.outputFile(mainDir, mainStrMin.code);
    } else {
      return await fs.outputFile(mainDir, mainStr);
    }
  } catch (e) {
    console.log(e);
  }
}

