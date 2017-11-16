var express = require('express')
var router = express()
var request = require('request')

router.get('/', (req, res) => {
  var url = req.query.url
  var headers = {
    Referer: 'http://music.163.com/',
    Cookie: 'appver=1.5.0.75771;',
    'Content-Type': 'video/mp4',
    Location: url
  }
  var options = {
    header: headers,
    url: url
  }
  request(options)
    .on('error', err => {
      res.send({ err })
    })
    .pipe(res)
})

module.exports = router
