import http from 'http';
import fs from 'fs';
import { AsyncLocalStorage } from 'async_hooks';

http.createServer(async(zapros, otvet) => {
    if(zapros.url != '/favicon.ico'){
        if(zapros.url == '/contacts'){
            let htmlFile = await fs.promises.readFile('page.html', 'utf8');

            otvet.writeHead(200, {'Content-Type' : 'text/html'});
            otvet.write(htmlFile);
            otvet.end();
        }
    }
}).listen(3000);