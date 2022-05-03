const express = require('express');
const app = express();
const port = 3000;

const myobj = require('./second');

app.get('/',(req,res)=>{
    res.send('Welcome to node js app');
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
    console.log(myobj);
});