import http from 'http';
import fs from 'fs';

http.createServer(async(siteVernul, SituOtpravil) => {
    let data, type;

    if(siteVernul.url != '/favicon.ico'){
        if(siteVernul.url === '/page.html'){
            data = await fs.promises.readFile('page.html', 'utf8');
            type = 'text/html'; //MIME Тип
        }
        if(siteVernul.url === '/abc.png'){
            data = await fs.promises.readFile('abc.png');
            type = 'image/png'; //MIME Тип
        }

        SituOtpravil.writeHead(200, {'Content-Type' : type});
        SituOtpravil.write(data);
        SituOtpravil.end();
    }
}).listen(3000);