var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var data = {
    csrf_token: '',
    type: req.query.type || 1,
    s: req.query.keywords || ''
  }

  util.createWebAPIRequest(
    'music.163.com',
    '/weapi/search/suggest/multimatch',
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
