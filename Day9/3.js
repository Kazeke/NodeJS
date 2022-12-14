// Пусть изначально наш счетчик имеет значение 50. Каждый запрос уменьшайте это значение на единицу и отдавайте новое значение в браузер. Как только счетчик дойдет до нуля, выведите результатом запроса сообщение об этом

import http from 'http';

let i = 50;
http.createServer((request, response)=>{

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