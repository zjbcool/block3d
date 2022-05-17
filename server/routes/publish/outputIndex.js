const { join } = require('node:path');
const fs = require('fs-extra');
/**
 * 
 * @param {string} projectName 项目名称
 * @param {object} options 
 * @param {object[]} options.modules [{enabled: true, module: 'module_name'}]
 */
module.exports = async function (projectName, options) {
  let indexStr = `
<!DOCTYPE html>
<html lang="${options.lang}">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${options.title}</title>
  <meta name="description" content="${options.description}">
  <link rel="apple-touch-icon" href="${options.icon}">
  <link rel="shortcut icon" href="${options.icon}">
  <link rel="stylesheet" href="./assets/css/index.css">

  </head>
  
<body>
  <div id="appContainer">
    <canvas id="renderCanvas"></canvas>
  </div>
  <script src="./assets/js/main.js"></script>
</body>

</html>    
`;
  const indexDir = join(process.env.PROJECTS_FOLDER, `${projectName}/index.html`);

  try {
    // 加载模块
    options.modules.forEach(async (mod) => {
      if (mod.enabled) {
        const libName = mod.module;
        // 库文件路径：lib/
        const libDir = join(process.cwd(), `lib/${libName}`);
        const destDir = join(process.env.PROJECTS_FOLDER, `${projectName}/assets/js/${libName}`);
        const newStr = `  <script src="./assets/js/${libName}"></script>
</head>`

        indexStr = indexStr.replace('</head>', newStr);
        // 拷贝库
        await fs.copy(libDir, destDir);
      }
    });
    // 写入index.html
    return await fs.outputFile(indexDir, indexStr);
  } catch (e) {
    console.log(e);
  }
}