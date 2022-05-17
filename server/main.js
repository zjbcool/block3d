const { log } = require('node:console'),
  Koa = require('koa'),
  serve = require('koa-static'),
  bodyParser = require('koa-bodyparser'),
  getConfig = require('./config/getConfig'),
  open = require('./routes/project/open'),
  router = require('./routes/router'),
  { join } = require('node:path');

const app = new Koa();
getConfig();
const { APP_HOST, APP_PORT, PROJECTS_FOLDER, AUTO_OPEN } = process.env;

// 静态文件
app.use(serve(join(__dirname, '../dist_frontend')));
app.use(serve(PROJECTS_FOLDER));
// 获取body
app.use(bodyParser({
  enableTypes: 'json/form/text/xml',
  jsonLimit: '5mb',
  textLimit: '5mb'
}));
// 路由
app.use(router.routes());
app.use(router.allowedMethods());
// 启动服务器
const localAddress = `http://${APP_HOST}:${APP_PORT}/`;
app.listen(APP_PORT, () => {
  log("> Local: \x1B[36m" + localAddress + "\x1B[0m");
  // 自动打开浏览器
  AUTO_OPEN === 'true' && open(localAddress);
});