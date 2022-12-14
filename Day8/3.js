import http from 'http';

http.createServer((request, response)=>{
  if(request.url != '/favicon.ico'){
    if(request.url == '/page1'){
              response.writeHead(200, {'Content-Type' : 'text/html'});
              response.write('1');
              response.end();
          }
          else if(request.url == '/page2'){
              response.writeHead(200, {'Content-Type' : 'text/html'});
              response.write('2');
              response.end();
          }
          else{
              response.writeHead(404, {'Content-Type' : 'text/html'});
              response.write('error, page not found!');
              response.end();
          }
    }}).listen(3000);