import http from 'http';

//2) Упростите его через метод writeHead.
// http.createServer((request, response) => {
// 	response.setHeader('Content-Type', 'text/plain');
// 	response.statusCode = 404;
// 	response.write('page not found');
// 	response.end();
// }).listen(3000);


http.createServer((requests, response) => {
    response.writeHead(404, {"Content-Type" : "text/html"});
    response.write('<h1><b>page not found</b></h1>');
    response.end(); // завершаем 
}).listen(3000);
