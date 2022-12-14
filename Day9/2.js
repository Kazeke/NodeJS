// Сделайте так, чтобы ваш сервер при запросе отдавал текущее время, оформленное в каком-нибудь теге.

import http from 'http';

http.createServer((requests, response) => {
    response.writeHead(200, {"Content-Type" : "text/html"});

    response.write('<b>18:39</b>');

    response.end(); // завершаем 
}).listen(3000);