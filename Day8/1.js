import http from 'http';


let i = 0;
http.createServer((request, response)=>{
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    if(request.url != '/favicon.ico'){

        response.write(String(++i));
    }

    console.log(request.url);
 //   response.write('hello World!');
    response.end();
}).listen(3000);