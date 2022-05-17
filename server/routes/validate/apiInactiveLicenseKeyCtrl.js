const fs = require('fs-extra');
const { join } = require('node:path');

const {
  validateLicenseFromFile,
  getLicenseLeftDays,
  getLicenseStatus,
  updateLicenseStatus,
} = require('./validate');
/**
 * 授权码取消激活流程
 * 1. 验证授权码
 * 2. 修改授权码状态
 * 3. 保存授权码
 */

module.exports = async (ctx, next) => {
  /**
   * 后端woocommerce插件license-manager
   * https://github.com/wpexpertsio/license-manager-for-woocommerce
   * 授权码状态
   * 状态      状态码  说明
   * SOLD       1     售出
   * DELIVERED  2     交付
   * ACTIVE     3     激活
   * INACTIVE   4     闲置
   */
  // 1. 验证授权信息
  const licenseInfo = await validateLicenseFromFile();
  const leftDays = getLicenseLeftDays(licenseInfo);
  // 2. 修改授权码状态
  if (licenseInfo && licenseInfo.data && leftDays) {
    ctx.body = 'ok';
    const putDataResult = await updateLicenseStatus(licenseInfo.data.licenseKey, 'DELIVERED');
    getLicenseStatus(putDataResult) == 'DELIVERED' && console.log('已取消激活授权码');
  } else {
    ctx.body = 'failed'
  }
  // 3. 删除license.txt
  await fs.remove(join(process.cwd(), 'license.txt'));

}