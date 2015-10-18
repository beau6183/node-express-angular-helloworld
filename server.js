/*jslint node: true, es5: true*/
"use strict";
var express = require('express'),
    app = express();
app.use(express.static('www')); //Server-static HTML, JS, CSS, etc, goes here.
// HTTP GET operation to get a JSON result. You could POST/PUT/DELETE/etc., too.
app.get('/api/someJsonEndpoint', function (request, result) {
    console.log('api hit');
    result.json({result: "Hello World"}); // return json encoded object
});
// ... create new endpoints for each object, or make it dynamic
app.listen(8080);