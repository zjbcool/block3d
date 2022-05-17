const {
  getLicenseInfo,
  getLicenseLeftDays,
  getLicenseStatus,
  updateLicenseStatus,
  createLicenseFile
} = require('./validate');

/**
 * 授权码激活流程
 * 1. 验证授权码
 * 2. 修改授权码状态
 * 3. 保存授权码
 */

module.exports = async (ctx, next) => {
  const { licensekey } = ctx.request.body

  /**
   * 后端woocommerce插件license-manager
   * https://github.com/wpexpertsio/license-manager-for-woocommerce
   * 授权码状态
   * 状态      状态码  说明
   * SOLD       1     售出
   * DELIVERED  2     交付
   * ACTIVE     3     激活
   * INACTIVE   4     无效
   */
  try {
    const licenseInfo = await getLicenseInfo(licensekey);
    // 1. 验证激活：当key存在于数据库，状态为DELIVERED
    if (licenseInfo.success && getLicenseStatus(licenseInfo) == 'DELIVERED') {
      // 2. 修改授权码状态为已激活 "ACTIVE"
      const putDataResult = await updateLicenseStatus(licensekey, "ACTIVE");
      putDataResult.data.status == 3 && console.log(`已激活，有效期剩余：${getLicenseLeftDays(licenseInfo)}天`);
      // 3. 保存授权信息到license.txt
      createLicenseFile(putDataResult);
      ctx.body = { validate: 'valid' }
    } else {
      ctx.body = { validate: 'invalid' }
    }
  } catch (e) {
    console.log(e)
  }

}