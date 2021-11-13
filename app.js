const http = require('http');
const os = require('os');

function sayHello(name)
{
  console.log('Hello ' + name)
}

console.log("Kevin Server Starting ...");

var handler = function(request, response){
    console.log(`Request recived from: ${request.connection.remoteAddress}`);
    response.writeHead(200);
    response.end(`You are here new version !!!${os.hostname()}\n`);
};

var www= http.createServer(handler);

www.listen(8080);
