var express = require("express");
var router = express();
var util = require("../util/util");

router.get("/", (req, res) => {
  var cookie = req.get("Cookie") ? req.get("Cookie") : "";
  var data = {
    cat: req.query.cat || "全部",
    offset: req.query.offset || 0,
    limit: req.query.limit || 20,
    csrf_token: ""
  };
  util.createWebAPIRequest(
    "music.163.com",
    "/weapi/playlist/highquality/list",
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
});

module.exports = router;
