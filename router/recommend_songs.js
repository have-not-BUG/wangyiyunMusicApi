var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var data = {
    offset: 0,
    total: true,
    limit: 20,
    csrf_token: ''
  }

  util.createWebAPIRequest(
    'music.163.com',
    '/weapi/v1/discovery/recommend/songs',
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
