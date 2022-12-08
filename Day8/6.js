import http from 'http';
import fs from 'fs';

http.createServer(async(request, response)=>{
  if(request.url != '/favicon.ico'){
    let text;
    let status;

    if(request.url == '/page1'){              
              text = await fs.promises.readFile('page.html', 'utf8');
              status = 200;             
          }
          else if(request.url == '/page2'){
              text = 2;  
              status = 200;             
          }
          else{              
              response.write('error, page not found!');
              status = 404; 
          }
          response.writeHead(status, {'Content-Type' : 'text/html'});
          response.write(String(text));
          response.end();
    }}).listen(3000);