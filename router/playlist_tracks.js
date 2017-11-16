var express = require('express')
var router = express()
var util = require('../util/util')
//收藏单曲到歌单，从歌单删除歌曲 op=del,add;pid=歌单id,tracks=歌曲id
router.get('/', (req, res) => {
  var op = req.query.op
  var pid = req.query.pid
  var tracks = req.query.tracks
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  // console.log('COOKIESS', cookie)
  var data = {
    op: op,
    pid: pid,
    tracks: tracks,
    trackIds: JSON.stringify([tracks]),
    csrf_token: ''
  }
  util.createWebAPIRequest(
    'music.163.com',
    '/weapi/playlist/manipulate/tracks',
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
