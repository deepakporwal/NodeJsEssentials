var https = require('https');

var fs = require('fs');

var options = {
hostname : "en.wikipedia.org",
port : 443,
path : "/wiki/Nodejs",
method : "GET"
};

var req = https.request(options, function(res){

var responseBody = "";

console.log('Response started!');

console.log(`Server status: ${res.statusCode}`);

console.log("Response header %j", res.headers);
res.setEncoding('UTF-8');

res.once('data', function(chunck){
console.log(chunck);
});

res.on('data', function(chunck){
console.log(`---chunck --- ${chunck.length}`);
responseBody+= chunck;
});

res.on("end", function(){
fs.writeFile('Node.html', responseBody, function(err){
if(err){
throw err;
}
console.log('file downloaded successfully');
});
})
});

// if there are error on the request

req.on('error', function(err){
console.log(`problem with request : ${err.message}`);
});

req.end();