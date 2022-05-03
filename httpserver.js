const http = require('http');

const port = process.env.port ||3004;

const server = http.createServer((req, res) => {
    res.statusCode = 201;
    res.setHeader('content-Type', 'text/html');
    res.end('<h1> This is response from sample server</h1>');
})

server.listen(port, () => {
    console.log(`Server is started at port ${port}`
    )
});