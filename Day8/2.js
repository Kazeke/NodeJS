import http from 'http';


let i = 10;
http.createServer((request, response)=>{
    // response.setHeader('Content-Type', 'text/html');
    // response.statusCode = 200;

    response.writeHead(200, {'Content-Type': 'text/html'});

    if(request.url != '/favicon.ico'){

        response.write(String(--i));
    }
   
    console.log(request.url);
    if(i==0){
        response.write("Stop");       
    }
    
 //   response.write('hello World!');
    response.end();
}).listen(3000);