var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var data = {
    limit: req.query.limit || 10,
    offset: req.query.offset || 0,
    csrf_token: ''
  }
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  util.createWebAPIRequest(
    'music.163.com',
    '/weapi/v1/cloud/get',
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
