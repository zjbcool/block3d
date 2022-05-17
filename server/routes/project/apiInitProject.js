const getAllProjects = require('./getAllProjects');
const {
  validateLicenseFromFile,
  getLicenseLeftDays,
  getLicenseStatus
} = require('../validate/validate')

module.exports = async function (ctx, next) {
  try {
    const data = {};
    let licenseInfo,
      leftDays,
      status,
      expires;

    licenseInfo = await validateLicenseFromFile();
    leftDays = getLicenseLeftDays(licenseInfo);
    status = getLicenseStatus(licenseInfo);
    expires = licenseInfo && licenseInfo.data && licenseInfo.data.expiresAt || 0;

    // 界面语言
    data.LANG = ctx.query['lang'] || 'zh';
    // 标题
    data.TITLE = process.env.TITLE;
    // 版本号
    data.VERSION = process.env.VERSION;
    // 版本日期
    data.RELEASE_DATE = process.env.RELEASE_DATE;
    // 项目名称
    data.PROJECT_NAME = process.env.PROJECT_NAME;
    // 授权状态
    data.LICENSE_STATUS = status;
    // 到期时间
    data.EXPIRES = expires;
    // 剩余天数
    data.LICENSE_LEFT_DAYS = leftDays;
    // 主机设置
    data.APP_HOST = process.env.APP_HOST;
    // 端口设置
    data.APP_PORT = process.env.APP_PORT;
    // 项目文件夹
    data.PROJECTS_FOLDER = process.env.PROJECTS_FOLDER;
    // 所有项目列表
    data.PROJECTS_LIST = await getAllProjects(process.env.PROJECTS_FOLDER);
    // 自动打开浏览器
    data.AUTO_OPEN = process.env.AUTO_OPEN;
    // 自动保存
    data.AUTO_SAVE = process.env.AUTO_SAVE;
    // 启用外部服务器接口
    data.EXTERNAL_SERVER = process.env.EXTERNAL_SERVER;

    return ctx.body = data
  } catch (e) {
    console.log(e)
  }
}
