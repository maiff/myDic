const login = require('../../login/login')
const assert = require('assert')

describe('get cookie', function () { 
  it('success', function (done) {
    login('webstudy616@163.com', '2101239xwt').then((cookie) => {
      assert.equal(cookie.length, 3)
      // console.log(cookie)
      done()
    }, (err) => {
      done(err)
    })
  })

  it('fail', function (done) {
    login('webstudy616@163.com', '210123xwt1').then((cookie) => {
      // console.log(cookie)
      assert.equal(cookie.length, 2)
      done()
    }, (err) => {
      done(err)
    })
  })
})