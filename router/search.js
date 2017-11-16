var express = require("express");
var router = express();
var util = require("../util/util");

router.get("/", (req, res) => {
  var cookie = req.get("Cookie") ? req.get("Cookie") : "";
  var keywords = req.query.keywords;
  var type = req.query.type || 1;
  var limit = req.query.limit || 30;
  var offset = req.query.offset || 0;
  // *(type)* 搜索单曲(1)，歌手(100)，专辑(10)，歌单(1000)，用户(1002)
  var data = {
    csrf_token: "",
    limit,
    type,
    s: keywords,
    offset
  };

  util.createWebAPIRequest(
    "music.163.com",
    "/weapi/search/get",
    "POST",
    data,
    cookie,
    music_req => res.send(music_req),
    err => res.status(502).send("fetch error")
  );
});

module.exports = router;
