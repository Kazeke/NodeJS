import http from 'http';

//3) Упростите его через метод writeHead

// http.createServer((request, response) => {
// 	response.setHeader('Content-Type', 'text/html');
// 	response.setHeader('Content-Language', 'ru');
// 	response.statusCode = 200;
// 	response.write('{}');
// 	response.end();
// }).listen(3000);


http.createServer((requests, response) => {
    response.writeHead(200, {"Content-Type" : "text/html"}, {'Content-Language': 'ru'});
    response.write('{}');
    response.end(); // завершаем 
}).listen(3000);
