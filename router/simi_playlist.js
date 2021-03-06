var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var data = {
    songid: req.query.id,
    offset: req.query.offset || 0,
    limit: req.query.limit || 50
  }
  util.createWebAPIRequest(
    'music.163.com',
    '/weapi/discovery/simiPlaylist',
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
