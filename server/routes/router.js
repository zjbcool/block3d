const Router = require('koa-router');
const index = require('./index');
const apiInitProject = require('./project/apiInitProject');
const apiCreateProject = require('./project/apiCreateProject');
const apiGetReadMe = require('./project/apiGetReadMe');
const apiSave = require('./save/apiSave');
const apiSaveAs = require('./save/apiSaveAs');
const apiAutoSave = require('./save/apiAutoSave');
const apiRevealFolder = require('./project/apiRevealFolder');
const apiRemoveProject = require('./project/apiRemoveProject');
const apiSettings = require('./project/apiSettings');
const apiActiveLicenseKeyCtrl = require('./validate/apiActiveLicenseKeyCtrl');
const apiInactiveLicenseKeyCtrl = require('./validate/apiInactiveLicenseKeyCtrl');
const apiPublishCtrl = require('./publish/apiPublishCtrl');

const router = new Router();
// 默认项目
router.redirect('/', '/defaultProject/~');
router.get('/:name/~', index);
// API
// 初始化项目
router.get('/api/init', apiInitProject);
// 创建项目
router.post('/api/create', apiCreateProject);
// 读取README.txt
router.post('/api/readme', apiGetReadMe);
// 打开项目文件夹
router.post('/api/reveal', apiRevealFolder);
// 删除项目文件夹
router.post('/api/remove', apiRemoveProject);
// 设置
router.post('/api/settings', apiSettings);
// 保存workspace.json
router.post('/api/save', apiSave);
// 另存为
router.post('/api/saveas', apiSaveAs);
// 自动保存
router.post('/api/autosave', apiAutoSave);
// 验证授权码
router.post('/api/active-license-key', apiActiveLicenseKeyCtrl);
// 取消激活授权码
router.get('/api/inactive-license-key', apiInactiveLicenseKeyCtrl);
// 发布应用
router.post('/api/publish', apiPublishCtrl);

module.exports = router;