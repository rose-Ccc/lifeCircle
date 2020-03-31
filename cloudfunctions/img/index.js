const cloud = require('wx-server-sdk');
const utility = require('utility');

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await cloud.uploadFile({
      fileContent: new Buffer(event.fileContent, 'base64'),
      cloudPath: utility.md5(String(Math.random())) // 使用随机文件名
    })
  } catch (e) {
    return e
  }
}