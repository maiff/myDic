let addHeader = require('./addHeader')
const request = require('superagent')

// let wordInfo = {
//   word:'test2',
//   phonetic:'[test]',
//   desc:`n. 试验；检验
//   vt. 试验；测试
//   vi. 试验；测试
//   n. (Test)人名；(英)特斯特`,
//   tags:''
// }
module.exports = function (cookie, wordInfo) {
  addHeader.Cookie = cookie + ''
  return new Promise((resolve, reject) => {
    request
      .post('http://dict.youdao.com/wordbook/wordlist?action=add')
      // .redirects(1)
      .set(addHeader)
      .send(wordInfo)
      .end(function (err, res) {
        err && reject(err)
        resolve(res.text)
      })
  })
}
