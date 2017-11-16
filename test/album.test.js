var assert = require('assert')
var crypto = require('crypto')
var util = require('../util/util')

describe('测试获取歌手专辑列表是否正常', () => {
  it('数据的 code 应该为200', done => {
    var id = 32311
    util.createRequest(`/api/album/${id}`, 'GET', null)
      .then(result => {
        var code = JSON.parse(result).code
        console.log('code:' + code)
        assert(code === 200)
        done()
      })
      .catch(err => done(err))
  })
})
