//Разверните сервер, отправляющий в браузер какой-нибудь текст.

import http from 'http';

http.createServer((requests, response) => {
    response.write("Hello World  я здесь"); // Написать hello world
    response.end(); // завершаем 
}).listen(3000);

// Сделайте так, чтобы ваш сервер при запросе отдавал текущее время, оформленное в каком-нибудь теге.

import http from 'http';

http.createServer((requests, response) => {
    response.writeHead(200, {"Content-Type" : "text/html"});

    response.write('<b>18:39</b>');

    response.end(); // завершаем 
}).listen(3000);

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

// Сделайте сервер на основе этого объекта. При запросе существующего в объекте адреса отдавайте соответствующий текст, а при запросе отсутствующего - сообщение об ошибке и статус 404.

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


// Отправьте заголовок Cache-Control со значением 'no-cache'.

import http from 'http';

http.createServer((requests, response) => {
    response.writeHead(200, {"Content-Type" : "text/html"}, {'Cache-Control': 'no-cache'});

    response.write("text1");
    response.write("text2");
    response.write("text3");

    response.write('<b>Hello World</b>');

    response.end(); // завершаем 
}).listen(3000);