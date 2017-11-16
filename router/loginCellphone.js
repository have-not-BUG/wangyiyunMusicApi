var express = require('express')
var crypto = require('crypto')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var phone = req.query.phone
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var md5sum = crypto.createHash('md5')
  md5sum.update(req.query.password)
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
      // console.log(music_req)
      res.set({
        'Set-Cookie': cookie
      })
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
