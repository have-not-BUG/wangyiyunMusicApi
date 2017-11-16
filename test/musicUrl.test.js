var assert = require('assert')
var crypto = require('crypto')
var util = require('../util/util')

describe('测试获取歌曲是否正常', () => {
  it('歌曲的 url 不应该为空', done => {
    var id = 347230
    var br = 999000
    var data = {
      ids: [id],
      br: br,
      csrf_token: ''
    }
    var cookie = ''

    util.createWebAPIRequest(
      'music.163.com',
      '/weapi/song/enhance/player/url',
      'POST',
      data,
      cookie,
      music_req => {
        console.log(JSON.parse(music_req).data[0].url)
        assert(!!JSON.parse(music_req).data[0].url)
        done()
      },
      err => {
        done(err)
      }
    )
  })
})
