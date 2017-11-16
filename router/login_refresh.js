var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var data = {
    csrf_token: ''
  }
  console.log({ cookie })
  util.createWebAPIRequest(
    'music.163.com',
    `/weapi/login/token/refresh`,
    'POST',
    data,
    cookie,
    (music_req, cookie) => {
      console.log({ cookie })
      res.set({
        'Set-Cookie': cookie
      })
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
