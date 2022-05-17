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
      version: '1.0.0 Beta.1',
      date: '2022-6-15'
    }
    process.env.VERSION = info.version;
    process.env.TITLE = `${info.name} ${info.version}`;
    process.env.RELEASE_DATE = info.date;
  } catch (e) {
    console.log(e);
  }
}
