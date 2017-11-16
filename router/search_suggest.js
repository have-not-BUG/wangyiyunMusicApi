const express = require('express')
const router = express()
const util = require('../util/util')

router.get('/', (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    csrf_token: '',
    s: req.query.keywords || ''
  }

  util.createWebAPIRequest(
    'music.163.com',
    '/weapi/search/suggest/web',
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