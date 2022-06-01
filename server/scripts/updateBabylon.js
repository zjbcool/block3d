const { join } = require('node:path');
const fs = require('fs-extra');
/**
 * 更新BabylonJS依赖
 */
async function updateBabylon() {
  const sourceDir = join(__dirname, '../../.snapshot')
  const libDir = join(__dirname, '../lib')
  const distFrontendDir = join(__dirname, '../../dist_frontend/js/babylon')
  const tsdeclareDir = join(__dirname, '../../tsdeclare')

  try {
    const exists = await fs.pathExists(sourceDir);
    if (exists) {
      // server/lib 更新
      await fs.copy(join(sourceDir, 'babylon.js'), join(libDir, 'babylon.js'));
      await fs.copy(join(sourceDir, 'gui/babylon.gui.min.js'), join(libDir, 'babylon.gui.min.js'));
      await fs.copy(join(sourceDir, 'loaders/babylon.glTF2FileLoader.min.js'), join(libDir, 'babylon.glTF2FileLoader.min.js'));
      await fs.copy(join(sourceDir, 'loaders/babylon.objFileLoader.min.js'), join(libDir, 'babylon.objFileLoader.min.js'));
      await fs.copy(join(sourceDir, 'loaders/babylon.stlFileLoader.min.js'), join(libDir, 'babylon.stlFileLoader.min.js'));
      // dist_frontend/js/babylon
      await fs.copy(join(sourceDir, 'babylon.max.js'), join(distFrontendDir, 'babylon.max.js'));
      await fs.copy(join(sourceDir, 'babylon.max.js.map'), join(distFrontendDir, 'babylon.max.js.map'));
      await fs.copy(join(sourceDir, 'gui/babylon.gui.js'), join(distFrontendDir, 'babylon.gui.js'));
      await fs.copy(join(sourceDir, 'gui/babylon.gui.js.map'), join(distFrontendDir, 'babylon.gui.js.map'));
      await fs.copy(join(sourceDir, 'guiEditor/babylon.guiEditor.max.js'), join(distFrontendDir, 'babylon.guiEditor.max.js'));
      await fs.copy(join(sourceDir, 'guiEditor/babylon.guiEditor.max.js.map'), join(distFrontendDir, 'babylon.guiEditor.max.js.map'));
      await fs.copy(join(sourceDir, 'inspector/babylon.inspector.bundle.max.js'), join(distFrontendDir, 'babylon.inspector.bundle.max.js'));
      await fs.copy(join(sourceDir, 'inspector/babylon.inspector.bundle.max.js.map'), join(distFrontendDir, 'babylon.inspector.bundle.max.js.map'));
      await fs.copy(join(sourceDir, 'loaders/babylonjs.loaders.js'), join(distFrontendDir, 'babylonjs.loaders.js'));
      await fs.copy(join(sourceDir, 'loaders/babylonjs.loaders.js.map'), join(distFrontendDir, 'babylonjs.loaders.js.map'));
      await fs.copy(join(sourceDir, 'materialsLibrary/babylonjs.materials.js'), join(distFrontendDir, 'babylonjs.materials.js'));
      await fs.copy(join(sourceDir, 'materialsLibrary/babylonjs.materials.js.map'), join(distFrontendDir, 'babylonjs.materials.js.map'));
      await fs.copy(join(sourceDir, 'nodeEditor/babylon.nodeEditor.max.js'), join(distFrontendDir, 'babylon.nodeEditor.max.js'));
      await fs.copy(join(sourceDir, 'nodeEditor/babylon.nodeEditor.max.js.map'), join(distFrontendDir, 'babylon.nodeEditor.max.js.map'));
      // tsdeclare
      await fs.copy(join(sourceDir, 'babylon.d.ts'), join(tsdeclareDir, 'babylon.d.ts'));

    }

  } catch (e) {
    console.log(e);
  }
}

updateBabylon()