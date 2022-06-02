const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs-extra');
const { join } = require('node:path');
// 混淆block3d.umd.js
(async () => {
  const inputFile = join(__dirname, '../../blocks/dist/block3d.umd.js')
  const outputFile = join(__dirname, '../../dist_frontend/js/block3d/block3d.umd.js')
  const result = (await fs.readFile(inputFile)).toString()
  const obfuscationResult = JavaScriptObfuscator.obfuscate(result, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    numbersToExpressions: true,
    simplify: true,
    stringArrayShuffle: true,
    splitStrings: true,
    stringArrayThreshold: 1
  });
  const isExist = await fs.pathExists(outputFile);
  if (isExist) {
    await fs.remove(outputFile);
    console.log('remove old');
  }

  await fs.outputFile(outputFile, obfuscationResult.getObfuscatedCode());
  console.log('done!');
})()



