const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} by method ${req.method}`);

    if (req.method === 'GET') {
        var fileUrl;
        if (req.url === '/') fileUrl = '/pop_vs_alt_fuel.json';
        else fileUrl = req.url;

        var filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
        if (fileExt === '.json') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end(`File ${fileUrl} not found`);
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                fs.createReadStream(filePath).pipe(res);
            });
        }
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`File ${fileUrl} not a JSON file`);
        }
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`${req.method} not supported`);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});