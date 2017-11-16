var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var data = {
    csrf_token: ''
  }
  var id = req.query.id
  var offset = req.query.offset || 0
  var limit = req.query.limit || 50
  util.createWebAPIRequest(
    'music.163.com',
    `/weapi/v1/artist/${id}?offset=${offset}&limit=${limit}`,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
