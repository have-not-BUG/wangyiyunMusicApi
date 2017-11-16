var assert = require('assert')
var crypto = require('crypto')
var util = require('../util/util')

describe('测试搜索是否正常', () => {
  it('获取到的数据的 name 应该和搜索关键词一致', done => {
    var keywords = '海阔天空'
    var type = 1
    var limit = 30
    var data =
      's=' + keywords + '&limit=' + limit + '&type=' + type + '&offset=0'
    util.createRequest('/api/search/pc/', 'POST', data)
      .then(result => {
        console.log(JSON.parse(result).result.songs[0].mp3Url)
        assert(JSON.parse(result).result.songs[0].name === '海阔天空')
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
