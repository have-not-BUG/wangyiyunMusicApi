var http = require('http')
var express = require('express')
var router = express()
var util = require('../util/util')

router.get('/', (req, res) => {
  var cookie = req.get('Cookie') ? req.get('Cookie') : ''
  var detail, imgurl
  var data = {
    id: req.query.id,
    offset: 0,
    total: true,
    limit: 1000,
    n: 1000,
    csrf_token: ''
  }

  util.createWebAPIRequest(
    'music.163.com',
    '/weapi/v3/playlist/detail',
    'POST',
    data,
    cookie,
    music_req => {
      console.log(music_req)
      // detail = music_req
      res.send(music_req)
      // mergeRes()
    },
    err => {
      res.status(502).send('fetch error')
    }
  )

  // FIXME:i dont know the api to get coverimgurl
  // so i get it by parsing html
  // var http_client = http.get({
  //   hostname: 'music.163.com',
  //   path: '/playlist?id=' + req.query.id,
  //   headers: {
  //     'Referer': 'http://music.163.com',
  //   },
  // }, function (res) {
  //   res.setEncoding('utf8')
  //   var html = ''
  //   res.on('data', function (chunk) {
  //     html += chunk
  //   })
  //   res.on('end', function () {
  //     console.log('end', html)
  //     var regImgCover = /\<img src=\"(.*)\" class="j-img"/ig
  //     imgurl = regImgCover.exec(html)[1]
  //     mergeRes()

  //   })
  // })

  // function mergeRes() {
  //   if (imgurl != undefined && detail != undefined) {
  //     detail = JSON.parse(detail)
  //     detail.playlist.picUrl = imgurl
  //     res.send(detail)
  //   }
  // }
})

module.exports = router
