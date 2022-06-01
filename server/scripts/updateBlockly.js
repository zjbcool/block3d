const { join } = require('node:path');
const fs = require('fs-extra');
/**
 * 更新Blockly
 */
async function updateBlockly() {
  const sourceDir = join(__dirname, '../../blocks/node_modules/blockly')
  const blocklyDir = join(__dirname, '../../dist_frontend/js/blockly')

  const files = [
    'blockly_compressed.js',
    'blockly_compressed.js.map',
    'blocks_compressed.js',
    'blocks_compressed.js.map',
    'javascript_compressed.js',
    'javascript_compressed.js.map',
  ]

  try {
    const exists = await fs.pathExists(sourceDir);
    if (exists) {
      // dist_frontend/js/blockly 更新
      for (let file of files)
        await fs.copy(join(sourceDir, file), join(blocklyDir, file));
    }

  } catch (e) {
    console.log(e);
  }
}

updateBlockly()