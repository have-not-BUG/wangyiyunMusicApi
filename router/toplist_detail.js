// 排行榜详情
var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var data = {
    id: req.query.id,
    limit: 20,
    csrf_token: ''
  }
  util.createWebAPIRequest(
    'music.163.com',
    '/weapi/toplist/detail',
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
