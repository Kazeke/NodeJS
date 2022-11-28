import http from 'http';

http.createServer((requests, response) => {
    response.statusCode = 200;
    response.write("text1");
    response.write("text2");
    response.write("text3");
    response.end(); // завершаем 
}).listen(3000);




