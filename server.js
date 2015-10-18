/*jslint node: true, es5: true*/
"use strict";
var express = require('express'),
    app = express();

// Tell express to serve all files under the www directory statically, if they exist.
// These will be served from the root of the url, so http://localhost:8080/index.html will map to www/index.html
// HTML, CSS, client-side JS, images... any static content belongs under this directory.
app.use(express.static('www'));

// Tell express that GET requests matching the url of /api/someJsonEndpoint get served with this function
// Note: there are other operations supported here, like post, put, delete
app.get('/api/someJsonEndpoint', function (request, response) {
    response.json({result: "Hello World"}); // return json encoded object
});

// Start the webserver
app.listen(8080);