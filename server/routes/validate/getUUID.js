const { uuid } = require('systeminformation');
/**
 * https://systeminformation.io/system.html
 * @returns promise 硬件id
 */
module.exports = async () => {
  return new Promise(resole => {
    uuid(info => {
      resole(info.hardware)
    })
  })
}
