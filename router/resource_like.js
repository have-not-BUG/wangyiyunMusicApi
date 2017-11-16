const express = require('express')
const router = express()
const util = require('../util/util')

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    threadId: req.query.id,
    csrf_token: ''
  }
  const action = req.query.t == 1 ? 'like' : 'unlike'
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
