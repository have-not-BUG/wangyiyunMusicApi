var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var songId = req.query.id
  var alg = 'RT'
  var time = req.query.time || 25
  var data = {
    csrf_token: '',
    songId
  }

  util.createWebAPIRequest(
    'music.163.com',
    `/weapi/radio/trash/add?alg=${alg}&songId=${songId}&time=${time}`,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
