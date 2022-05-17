const { join } = require('node:path');
const fs = require('fs-extra');
/**
 * 
 * @param {string} dir 
 * @returns 
 */
module.exports = async function (dir) {
  try {
    // 排除'defaultProject'
    const projectsList = ['defaultProject'];
    const files = await fs.readdir(dir);
    for (const file of files) {
      const folder = await fs.stat(join(dir, file));
      if (folder.isDirectory() && file !== 'defaultProject')
        projectsList.push(file);
    }
    return projectsList;
  } catch (e) {
    console.log(e);
  }
}