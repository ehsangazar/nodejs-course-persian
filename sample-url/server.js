const http = require('http');
const url = require('url');
const readHtml = require('./readHtml');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const urlParsed = url.parse(req.url)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html');

    let html;
    if (urlParsed.pathname === '/about') {
        html = readHtml('./about.html')
    } else {
        html = readHtml('./mainpage.html')
    }
    res.end(html)
})


server.listen(port, hostname, () => {
    console.log('Server is running!')
})