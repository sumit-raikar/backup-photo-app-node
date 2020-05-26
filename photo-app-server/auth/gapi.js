const { google } = require('googleapis');
const Photos = require('googlephotos');

// const oauth2Client = new google.auth.OAuth2(
//     process.env.GAPI_CLIENT_ID,
//     process.env.GAPI_CLIENT_SECRET,
//     process.env.GAPI_REDIRECT_URL
// );

// const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
    process.env.GAPI_CLIENT_ID,
    process.env.GAPI_CLIENT_SECRET,
    process.env.GAPI_REDIRECT_URL
);

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = [
    'https://www.googleapis.com/auth/photoslibrary',
    'https://www.googleapis.com/auth/photoslibrary.sharing',
    'https://www.googleapis.com/auth/photoslibrary.readonly.appcreateddata'
];

const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',

    // If you only need one scope you can pass it as a string
    scope: scopes
});

module.exports = {
    url,
    oauth2Client
};