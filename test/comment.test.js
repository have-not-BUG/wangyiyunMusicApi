var assert = require('assert')
var crypto = require('crypto')
var util = require('../util/util')

describe('测试获取评论是否正常', () => {
  it('数据的 code 应该为200', done => {
    var rid = 32311
    var cookie = ''
    var data = {
      offset: 0,
      rid: rid,
      limit: 20,
      csrf_token: ''
    }
    util.createWebAPIRequest(
      'music.163.com',
      `/weapi/v1/resource/comments/R_SO_4_${rid}/?csrf_token=`,
      'POST',
      data,
      cookie,
      music_req => {
        console.log({
          code: JSON.parse(music_req).code
        })
        assert(JSON.parse(music_req).code === 200)
        done()
      },
      err => done(err)
    )
  })
})
