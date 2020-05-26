var express = require('express');
var router = express.Router();
const Photos = require('googlephotos');
const fetch = require('node-fetch');

async function getList(token, callback) {
    const photos = new Photos(token);
    const response = await photos.albums.list(50);
    console.log(response);
    callback(response);
}

router.post('/', function (req, res, next) {
    const { token } = req.body;
    // getList(token, function (response) {
    //     res.send({ authorized: false, result: response });
    // });
    fetch('https://photoslibrary.googleapis.com/v1/mediaItems', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(resp => resp.json())
        .then(json => res.send({ data: json }))
        .catch(err =>res.send({ err: err }))
});

module.exports = router;