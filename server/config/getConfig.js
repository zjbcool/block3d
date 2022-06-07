const fs = require('fs-extra');
const { join } = require('path')

module.exports = async () => {
  // 获取配置
  const configDir = join(process.cwd(), 'config.json')
  const configDirExist = fs.pathExistsSync(configDir)
  if (configDirExist) {
    const config = fs.readJSONSync(configDir);
    for (const [key, value] of Object.entries(config)) {
      process.env[key] = value
    }
    // 获取版本号
    const package = fs.readJSONSync(join(__dirname, '../package.json'))
    process.env.VERSION = package.version
    process.env.TITLE = `Block3D ${package.version}`
  } else {
    console.log(`${configDirExist}不存在`)
  }


}
