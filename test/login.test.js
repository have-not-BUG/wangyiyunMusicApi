var assert = require('assert')
var crypto = require('crypto')
var util = require('../util/util')

console.log('注意:测试登陆需要替换这里的账号密码!!!')

describe('测试登录是否正常', () => {
  it('手机登录 code 应该等于200', done => {
    var phone = '换成你的手机号'
    var password = '换成你的密码'
    var cookie = ''
    var md5sum = crypto.createHash('md5')
    md5sum.update(password)
    var data = {
      phone: phone,
      password: md5sum.digest('hex'),
      rememberLogin: 'true'
    }

    util.createWebAPIRequest(
      'music.163.com',
      '/weapi/login/cellphone',
      'POST',
      data,
      cookie,
      (music_req, cookie) => {
        var result = JSON.parse(music_req)
        console.log({
          loginType: result.loginType,
          code: result.code,
          account: result.account
        })
        assert(result.code === 200)
        done()
      },
      err => done(err)
    )
  })

  it('邮箱登录 code 应该等于200', done => {
    var email = '换成你的163网易邮箱'
    var password = '换成你的密码'
    var cookie = ''
    var md5sum = crypto.createHash('md5')
    md5sum.update(password)
    var data = {
      username: email,
      password: md5sum.digest('hex'),
      rememberLogin: 'true'
    }

    util.createWebAPIRequest(
      'music.163.com',
      '/weapi/login',
      'POST',
      data,
      cookie,
      (music_req, cookie) => {
        var result = JSON.parse(music_req)
        console.log({
          loginType: result.loginType,
          code: result.code,
          account: result.account
        })
        assert(result.code === 200)
        done()
      },
      err => done(err)
    )
  })
})
