var http = require('http')

var server = http.createServer(function (req, res) {
    res.writeHead('content-type', 'text/plain');
    res.end('Hello World!');
});

server.listen(3000);
