var express = require('express');
var router = express.Router();
var auth = require('../auth/gapi')

/* GET home page. */
router.get('/', function (req, res, next) {
  // console.log(gapiAuth.auth.OAuth2.GOOGLE_TOKEN_INFO_URL);
  // console.log(gapiAuth.OAuth2());
  res.send({ url: auth.url });
});

module.exports = router;
