var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var trackId = req.query.id
  var like = req.query.like || true
  var alg = req.query.alg || 'itembased'
  var time = req.query.time || 25
  var data = {
    csrf_token: '',
    trackId,
    like
  }
  util.createWebAPIRequest(
    'music.163.com',
    `/weapi/radio/like?alg=${alg}&trackId=${trackId}&like=${like}&time=${time}`,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
