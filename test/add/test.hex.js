const hexMd5 = require('../../login/md5')

const assert = require('assert')

describe('md5', function () { 
  it('success', function () {
    let p = hexMd5('2101239xwt')
    console.log(p)
    assert.equal(p, '996952c8ad4c22926136347df5a7a31f')
  })

  it('fail', function () {
    let p = hexMd5('210123xwt')
    console.log(p)
    assert.equal(p === '996952c8ad4c22926136347df5a7a31f', false)
  })
})