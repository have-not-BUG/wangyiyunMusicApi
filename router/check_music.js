var express = require('express')
var router = express()
var request = require('request')
var util = require('../util/util')
router.get('/', (req, res) => {
  var id = parseInt(req.query.id)
  var br = parseInt(req.query.br || 999000)
  var data = {
    ids: [id],
    br: br,
    csrf_token: ''
  }
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''

  util.createWebAPIRequest(
    'music.163.com',
    '/weapi/song/enhance/player/url',
    'POST',
    data,
    cookie,
    music_req => {
      if (JSON.parse(music_req).code == 200) {
        return res.send({ success: true, message: 'ok' })
      }
      return res.send({ success: false, message: '亲爱的,暂无版权' })
    },
    err => {
      res.status(502).send('fetch error')
    }
  )
})

module.exports = router
