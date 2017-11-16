var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var id = req.query.id
  var br = req.query.br || 999000
  var data = {
    ids: [id],
    br: br,
    csrf_token: ''
  }
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''

  util.createWebAPIRequest(
    'music.163.com',
    '/weapi/song/enhance/player/url',
    'POST',
    data,
    cookie,
    music_req => {
      res.setHeader('Content-Type', 'application/json')
      res.send(music_req)
    },
    err => {
      res.status(502).send('fetch error')
    }
  )
})

module.exports = router
