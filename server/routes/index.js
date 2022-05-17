const { join } = require('node:path');
const fs = require('fs-extra');
module.exports = async function (ctx, next) {
  const { name } = ctx.params;
  const templateDir = join(process.cwd(), 'templates/default');
  const defaultProjectDir = join(process.env.PROJECTS_FOLDER, 'defaultProject');
  process.env.PROJECT_NAME = name;

  try {
    // 如果默认项目不存在，则从模板创建
    if (name === 'defaultProject') {
      const exist = await fs.pathExists(defaultProjectDir);
      if (!exist) {
        await fs.copy(templateDir, defaultProjectDir);
      }
    }
    ctx.type = 'html'
    ctx.body = `
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>${name} | Block3D</title>
  <link rel="shortcut icon" href="/favicon.ico">
  <link rel="stylesheet" href="/css/vs2015.css">
  <link rel="stylesheet" href="/css/index.css">

  <script src="/js/babylon/babylon.max.js"></script>
  <script src="/js/babylon/babylonjs.loaders.js"></script>
  <script src="/js/babylon/babylonjs.materials.js"></script>
  <script src="/js/babylon/babylon.nodeEditor.max.js"></script>
  <script src="/js/babylon/babylon.gui.js"></script>
  <script src="/js/babylon/babylon.guiEditor.max.js"></script>
  <script src="/js/babylon/babylon.inspector.bundle.max.js"></script>

  <script src="/js/blockly/blockly_compressed.js"></script>
  <script src="/js/blockly/blocks_compressed.js"></script>
  <script src="/js/blockly/javascript_compressed.js"></script>

  <script src="/js/block3d/tsdeclare.umd.js"></script>
  <script src="/js/block3d/block3d.umd.js"></script>
  
  <script src="/js/monaco-editor/min/vs/loader.js"></script>
</head>

<body>
  <div id="root"></div>
  <script src="/js/index.js"></script>
</body>

</html>`
  } catch (e) {
    console.log(e)
  }
}
