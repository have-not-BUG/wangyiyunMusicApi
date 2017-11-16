var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var rid = req.query.id
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var data = {
    offset: req.query.offset || 0,
    rid: rid,
    limit: req.query.limit || 20,
    csrf_token: ''
  }
  util.createWebAPIRequest(
    'music.163.com',
    `/weapi/v1/resource/comments/R_AL_3_${rid}/?csrf_token=`,
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
