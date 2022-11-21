import fs from 'fs/promises';
import { constants } from 'fs';

try{
    await fs.access('text.txt', constants.F_OK);
    console.log('Файл существует');
}
catch{
    console.error('Такого файла нет!');
}