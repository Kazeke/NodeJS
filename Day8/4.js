import http from 'http';

http.createServer((request, response)=>{
  if(request.url != '/favicon.ico'){
    let text;
    if(request.url == '/page1'){              
              text = 1;              
          }
          else if(request.url == '/page2'){
              text = 2;              
          }
          else{              
              response.write('error, page not found!');
              
          }
          response.writeHead(200, {'Content-Type' : 'text/html'});
          response.write(String(text));
          response.end();
    }}).listen(3000);