//分类歌单
var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  // order可为 'hot' 可为 'new'
  var data = {
    cat: req.query.cat || '全部',
    order: req.query.order || 'hot',
    offset: req.query.offset || 0,
    total: req.query.total ? 'true' : 'false',
    limit: req.query.limit || 50
  }
  util.createWebAPIRequest(
    'music.163.com',
    '/weapi/playlist/list',
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
