var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var id = req.query.uid
  var data = {
    offset: req.query.offset || '0',
    limit: req.query.limit || 30,
    order: true
  }
  util.createWebAPIRequest(
    'music.163.com',
    `/weapi/user/getfollows/${id}`,
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
