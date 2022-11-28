import http from 'http';

http.createServer((requests, response) => {
    response.write("Hello World  я здесь"); // Написать hello world
    response.end(); // завершаем 
}).listen(3000);