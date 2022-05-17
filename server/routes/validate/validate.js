const fetch = require('node-fetch');
const fs = require('fs-extra');
const { join } = require('node:path');
const { base64encode } = require('./base64encode')
const dayjs = require('dayjs');
const getUUID = require('./getUUID');
const CryptoJS = require("crypto-js");


// 代理身份验证 用户名：密码
const author = {
  name: 'ck_aef53773ed11832e04d19dfca8be438393411305',
  password: 'cs_148ff5f5acdb13f7106ef17d05474b8532c30e96'
}
const b64 = base64encode(`${author.name}:${author.password}`);

/**
 * 加密数据
 * https://www.npmjs.com/package/crypto-js
 * @param {object | array | string} data 要加密的数据
 * @returns 密文
 */
function encrypt(data) {
  return CryptoJS.AES.encrypt(JSON.stringify(data), b64).toString();
}
/**
 * 解密数据
 * @param {string} ciphertext 要解密的文本
 * @returns 原始数据
 */
function decrypt(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, b64);
  return bytes.sigBytes ? JSON.parse(bytes.toString(CryptoJS.enc.Utf8)) : {};
}

/**
 * 
 * @param {string} licensekey 授权码
 * @returns licenseInfo
 */
async function getLicenseInfo(licensekey) {
  const url = `https://shop.zjbcool.com/wp-json/lmfwc/v2/licenses/${licensekey}`;
  const licenseInfo = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${b64}`
    }
  });
  return licenseInfo.json();
}
/**
 * 从本地JSON文件获取本机授权码，然后提交验证。
 * 用于发布验证
 * 验证条件：
 * 1-授权码存在；
 * 2-处于激活状态；
 * 3-处于有效期内
 * @returns 
 */
async function validateLicenseFromFile() {
  const licenseDir = join(process.cwd(), 'license.txt');
  const exist = await fs.pathExists(licenseDir);
  if (exist) {
    const ciphertext = await fs.readFile(licenseDir);
    const licenseInfo = decrypt(ciphertext.toString());
    // 密文的uuid与本机uuid相同
    if (licenseInfo && licenseInfo.data && licenseInfo.data.uuid == (await getUUID())) {
      return licenseInfo;
    }
  } else {
    return false;
  }
}
/**
 * 创建授权信息文件license.txt
 * @param {object} licenseInfo 
 */
async function createLicenseFile(licenseInfo) {
  try {
    const licenseDir = join(process.cwd(), 'license.txt');
    // 加入uuid信息用于验证
    licenseInfo.data.uuid = (await getUUID());
    const ciphertext = encrypt(licenseInfo);
    await fs.outputFile(licenseDir, ciphertext);
  } catch (e) {
    console.log(e);
  }
}
/**
 * 后端woocommerce插件license-manager
 * https://github.com/wpexpertsio/license-manager-for-woocommerce
 * 授权码状态
 * 状态      状态码  说明
 * SOLD       1     售出
 * DELIVERED  2     交付
 * ACTIVE     3     激活
 * INACTIVE   4     闲置
 * @param {string} licensekey 授权码
 * @param {string} status 状态
 */
async function updateLicenseStatus(licensekey, status) {
  const url = `https://shop.zjbcool.com/wp-json/lmfwc/v2/licenses/${licensekey}`;
  const putData = {
    status: status,
  }
  const putLicenseInfo = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Basic ${b64}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(putData)
  });
  return putLicenseInfo.json();
}
/**
 * 获取授权剩余天数
 * @param {object} licenseInfo 授权信息
 * @returns 剩余天数
 */
function getLicenseLeftDays(licenseInfo) {
  if (!licenseInfo || !licenseInfo.success) return 0;
  const expiresAt = dayjs(licenseInfo.data.expiresAt);
  const now = dayjs();
  const leftDays = now.isBefore(expiresAt) ? expiresAt.diff(now, 'day') + 1 : 0;
  return leftDays;
}
/**
 * 获取许可状态
 * @param {object} licenseInfo 
 * @returns 授权许可状态
 */
function getLicenseStatus(licenseInfo) {
  if (!licenseInfo || !licenseInfo.success) return 'INACTIVE';
  const { status } = licenseInfo.data;
  const emu = {
    1: 'SOLD',
    2: 'DELIVERED',
    3: 'ACTIVE',
    4: 'INACTIVE'
  }
  return emu[status];

}

module.exports = {
  encrypt,
  decrypt,
  getLicenseInfo,
  getLicenseLeftDays,
  getLicenseStatus,
  createLicenseFile,
  validateLicenseFromFile,
  updateLicenseStatus,
}