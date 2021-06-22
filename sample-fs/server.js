const http = require('http');
const readHtml = require('./readHtml');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html');
    const html = readHtml('./mainpage.html')
    res.end(html)
})


server.listen(port, hostname, () => {
    console.log('Server is running!')
})