var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var rid = req.query.rid
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var data = {
    id: rid,
    csrf_token: ''
  }
  util.createWebAPIRequest(
    'music.163.com',
    '/weapi/djradio/get',
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
