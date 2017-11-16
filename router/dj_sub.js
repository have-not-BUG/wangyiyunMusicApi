var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var data = {
    id: req.query.rid,
    csrf_token: ''
  }
  var action = req.query.t == 1 ? 'sub' : 'unsub'
  util.createWebAPIRequest(
    'music.163.com',
    `/weapi/djradio/${action}`,
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
