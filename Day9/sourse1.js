import http from 'http';
import fs from 'fs';

http.createServer(async(siteVernul, SituOtpravil) => {
    let data, type;

    if(siteVernul.url != '/favicon.ico'){
        if(siteVernul.url === '/styles.css'){
            data = await fs.promises.readFile('style.css', 'utf8');
            type = 'text/css'; //MIME Тип
        }
        if(siteVernul.url === '/script.js'){
            data = await fs.promises.readFile('script.js', 'utf8');
            type = 'text/javascript'; //MIME Тип
        }

        SituOtpravil.writeHead(200, {'Content-Type' : type});
        SituOtpravil.write(data);
        SituOtpravil.end();
    }
}).listen(3000);