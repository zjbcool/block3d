const outputVisualLogic = require('./outputVisualLogic');
const outputIndex = require('./outputIndex');
const outputMainJs = require('./outputMainJs');
const { validateLicenseFromFile, getLicenseLeftDays } = require('../validate/validate')
/**
 * 发布应用
 * 1-写入visual_logic.js
 * 2-写入main.js
 * 3-创建index.html，加载库
 */

module.exports = async (ctx, next) => {
  // 验证授权
  // const licenseInfo = await validateLicenseFromFile();
  // const leftDays = getLicenseLeftDays(licenseInfo);
  // if (!licenseInfo || !leftDays) {
  //   ctx.body = 'failed';
  //   console.log('未激活')
  //   return
  // }

  const { projectName, workspaceData, options } = ctx.request.body;

  try {
    await outputVisualLogic(projectName, workspaceData, options);
    console.log('生成：visual_logic.js');
    await outputMainJs(projectName, options);
    console.log('生成：main.js');
    await outputIndex(projectName, options);
    console.log('生成：index.html');
    ctx.body = 'ok'
  } catch (e) {
    console.log(e);
  }

}