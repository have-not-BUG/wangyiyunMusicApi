var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var data = {
    csrf_token: ''
  }
  var url = req.query.type == 'add' ? 'follow' : 'delfollow'
  var id = req.query.id
  util.createWebAPIRequest(
    'music.163.com',
    `/weapi/user/${url}/${id}`,
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
