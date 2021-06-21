const http = require('http')
const generateReponse = require('./response')
const getContentType = require('./contentType')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', getContentType());
    res.end(generateReponse())
})


server.listen(port, hostname, () => {
    console.log('Server is running!')
})