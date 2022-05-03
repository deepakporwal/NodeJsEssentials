const http = require('http');
const fs = require('fs');

const port = process.env.port ||3004;

const server = http.createServer((req, res) => {
    if(req.url =='/'){
        res.statusCode = 201;
        res.setHeader('content-Type', 'text/html');
        res.end('<h1> This is response from sample server</h1>');
    }

    else if(req.url =='/hello'){
        res.statusCode = 201;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else
    {
        res.statusCode = 404;
        res.setHeader('content-Type', 'text/html');
        res.end('<h1> Content not found</h1>');
    }
   
})

server.listen(port, () => {
    console.log(`Server is started at port ${port}`
    )
});