const { join } = require('node:path');
const fs = require('fs-extra');
const getIPAddress = require('./getIPAddress');

module.exports = async (ctx, next) => {
  const setting = ctx.request.body;
  setting.EXTERNAL_SERVER && (setting.APP_HOST = getIPAddress());
  !setting.EXTERNAL_SERVER && (setting.APP_HOST = "localhost");
  try {
    await fs.outputJSON(join(process.cwd(), 'config.json'), setting);
    ctx.body = 'ok'
  } catch (e) {
    console.log(e);
  }
}