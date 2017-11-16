var express = require('express')
var crypto = require('crypto')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var email = req.query.email
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var md5sum = crypto.createHash('md5')
  md5sum.update(req.query.password)
  var data = {
    username: email,
    password: md5sum.digest('hex'),
    rememberLogin: 'true',
    clientToken:
      '1_jVUMqWEPke0/1/Vu56xCmJpo5vP1grjn_SOVVDzOc78w8OKLVZ2JH7IfkjSXqgfmh'
  }
  console.log(email, req.query.password)

  util.createWebAPIRequest(
    'music.163.com',
    '/weapi/login?csrf_token=',
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
