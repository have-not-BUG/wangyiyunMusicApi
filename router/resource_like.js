var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var data = {
    threadId: req.query.id,
    csrf_token: ''
  }
  var action = req.query.t == 1 ? 'like' : 'unlike'
  util.createWebAPIRequest(
    'music.163.com',
    `/weapi/resource/${action}`,
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
