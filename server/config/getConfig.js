const fs = require('fs-extra');
const { join } = require('path')

module.exports = () => {
  try {
    const configDir = join(process.cwd(), 'config.json');
    const config = fs.readJSONSync(configDir);
    for (const [key, value] of Object.entries(config)) {
      process.env[key] = value;
    }
    // 标题
    const info = {
      name: 'Block3D',
      version: 'v1.0.0-beta.1',
    }
    process.env.VERSION = info.version;
    process.env.TITLE = `${info.name} ${info.version}`;
  } catch (e) {
    console.log(e);
  }
}
