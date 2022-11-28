import http from 'http';
import { encode } from 'punycode';

http.createServer((requests, response) => {
    response.statusCode = 404;
  //  response.write("Страница не найдена", encode="utf-8");
    response.write("Stranitsa ne naidena");
    response.end(); // завершаем 
}).listen(3000);