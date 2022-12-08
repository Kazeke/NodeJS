import http from 'http';
import fs from 'fs';

let pages = {
    '/cars' : 'Audi',
    '/home' : 'tables',
    '/kids' : 'toys'
}

http.createServer(async(request, response)=>{
    for(let keys in pages){
    
        if(request.url != '/favicon.ico'){           
            let text;
            let status;  
      
            if(request.url == keys){
                text = pages[keys];
                status = 200;
                break;             
            }                                
            else{
                response.write('error, page not found!');
                status = 404; 
            }
            response.writeHead(status, {'Content-Type' : 'text/html'});
            response.write(String(text));
            response.end();
        }    
    }   
}).listen(3000);

