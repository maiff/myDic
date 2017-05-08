const login = require('../../login/login')
const assert = require('assert')

describe('get cookie', function () {
  
  it('success', function (done) {
    login('webstudy616@163.com', '210123xwt').then((cookie) => {
      assert.equal(cookie.length, 2)
      done()
    }, (err) => {
      done(err)
    })
  })

  it('fail', function () {
    login('webstudy616@163.com', '210123xwt1').then((cookie) => {
      assert.equal(cookie.length, 1)
      done()
    }, (err) => {
      done(err)
    })
  })

})