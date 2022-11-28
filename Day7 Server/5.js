import http from 'http';

//1) Сделайте так, чтобы ваш сервер при запросе отдавал текущее время, оформленное в каком-нибудь теге.
http.createServer((requests, response) => {
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write('<h1><b>18:41</b></h1>');

    response.end(); // завершаем 
}).listen(3000);
