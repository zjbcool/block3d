const { exec } = require("node:child_process");
//传入url
module.exports = function (url) {
  // 拿到当前系统的参数
  switch (process.platform) {
    //mac系统使用 以下命令在浏览器打开url
    case "darwin":
      exec(`open ${url}`);
    //win系统使用 以下命令在浏览器打开url
    case "win32":
      exec(`start ${url}`);
    // 默认mac系统
    default:
      exec(`open ${url}`);
  }
}