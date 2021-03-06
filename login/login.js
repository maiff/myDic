const request = require('superagent')
const hexMmd5 = require('./md5')
const loginHeader = require('./loginHeader')

let loginInfo = {
  app: 'web',
  tp: 'urstoken',
  cf: 7,
  fr: 1,
  ru: 'http://dict.youdao.com/wordbook/wordlist?keyfrom=login_from_dict2.index',
  product: 'DICT',
  type: 1,
  um: true,
  username: '',
  password: '',
  savelogin: 1
}
module.exports = function (username, password) {
  loginInfo.username = username
  loginInfo.password = hexMmd5(password)
  // console.log(loginInfo)
  return new Promise((resolve, reject) => {
    request
      .post('https://logindict.youdao.com/login/acc/login')
      .redirects(0)
      .set(loginHeader)
      .send(loginInfo)
      .end(function (err, res) {
        resolve(res.header['set-cookie'])
        err && reject(err)
      })
  })
}
