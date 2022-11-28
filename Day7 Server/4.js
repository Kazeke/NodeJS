import http from 'http';

http.createServer((requests, response) => {
    response.writeHead(200, {"Content-Type" : "text/html"});
 //   response.setHeader("Content-Type", "text/html");
 //   response.statusCode = 200;

    response.write("text1");
    response.write("text2");
    response.write("text3");

    response.write('<b>Hello World</b>');

    response.end(); // завершаем 
}).listen(3000);
