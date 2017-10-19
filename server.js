var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
  var page = 'index.html';
  var headStatus = 200;
  fs.readFile('./cenario/index.html', function(err, data){
    if(err){
      headStatus = 404;
      data = fs.readFileSync('./erro/404.html');
    }
    response.writeHead(headStatus, {'Content-type':'text/html; charset=utf-8'});
    response.write(data);
    response.end();
  })

});


server.listen(3000);
