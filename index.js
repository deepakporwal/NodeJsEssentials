const express = require('express');
const os = require('os');
const fs = require('fs');
const app = express();
const port = 3000;

// node js work on nonblocking io model
const myobj = require('./second');

app.get('/',(req,res)=>{
    res.send('Welcome to node js app');
})

app.get('/demo',(req,res)=>{
    res.send('this is a demo page');
});

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
    console.log(myobj);
    console.log(os.release());
    // read file from path
    fs.readFile('file.txt','utf-8',(err,data)=>{
        // this is a callback function so print later in the console.
        console.log(err,data);
    });

    console.log('finished reading file');
});