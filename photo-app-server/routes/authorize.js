var express = require('express');
var router = express.Router();
var auth = require('../auth/gapi');

async function getTokenFromOauth(oauth2Client, code, callback) {
    const { tokens } = await oauth2Client.getToken(code)
    console.log(tokens);
    callback(tokens);
}

router.post('/', function (req, res, next) {
    console.log(req.body);
    const { code } = req.body;
    if (code !== undefined) {
        getTokenFromOauth(auth.oauth2Client, code, function (newToken) {
            res.send({ authorized: true, auth: newToken });
        });
    } else {
        res.send({ authorized: false });
    }
});

module.exports = router;