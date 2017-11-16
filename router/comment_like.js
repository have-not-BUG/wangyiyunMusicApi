//comment like
var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var cid = req.query.cid //评论 id
  var id = req.query.id //  歌曲 id
  var typeMap = {
    0: 'R_SO_4_', //歌曲
    1: 'R_MV_5_', //mv
    2: 'A_PL_0_', //歌单
    3: 'R_AL_3_', //专辑
    4: 'A_DJ_1_' //电台
  }
  var type = typeMap[req.query.type]
  var data = {
    threadId: `${type}${id}`,
    commentId: cid,
    csrf_token: ''
  }
  var action = req.query.t == 1 ? 'like' : 'unlike'

  var url = `/weapi/v1/comment/${action}`
  util.createWebAPIRequest(
    'music.163.com',
    url,
    'POST',
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send('fetch error')
  )
})

module.exports = router
