//最新mv
var express = require('express')
var router = express()
var util = require('../util/util')

// type ALL, ZH,EA,KR,JP
router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var data = {
    offset: req.query.offset || 0,
    total: true,
    limit: req.query.limit || 50,
    area: req.query.type,
    csrf_token: ''
  }
  util.createWebAPIRequest(
    'music.163.com',
    '/weapi/album/new',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
