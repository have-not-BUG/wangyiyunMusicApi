//新歌上架
var express = require('express')
var router = express()
var util = require('../util/util')

// type ALL, ZH,EA,KR,JP
router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var data = {
    offset: req.query.offset,
    total: true,
    limit: req.query.limit,
    area: req.query.type,
    csrf_token: ''
  }
  util.createWebAPIRequest(
    'music.163.com',
    '/weapi/v1/discovery/new/songs',
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
