const add = require('../../login/add')
const login = require('../../login/login')
const assert = require('assert')

describe('add', function () {
  it('success', function (done) {
    login('webstudy616@163.com', '2101239xwt').then((cookie) => {
      return add(cookie + '', {
          word:'test' + new Date(),
          phonetic:'[test]',
          desc:`n. 试验；检验
          vt. 试验；测试
          vi. 试验；测试
          n. (Test)人名；(英)特斯特`,
          tags:''
      })
    }).then((text) => {
      // console.log(text)
      done()
    })
  })

  it('fail', function (done) {
    add('123456', {
          word:'test' + new Date(),
          phonetic:'[test]',
          desc:`n. 试验；检验
          vt. 试验；测试
          vi. 试验；测试
          n. (Test)人名；(英)特斯特`,
          tags:''
    }).then((text) => {
      assert.equal(text.indexOf('登录有道') === -1, false)
      done()
    }, (err) => {
      console.log(err)
      done(err)
    })
  })
})