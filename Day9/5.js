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
