import fs from 'fs/promises';
import { constants } from 'fs';

try{
    await fs.access('5.txt', constants.F_OK);
    console.log('Файл существует');
}
catch{
    console.error('Такого файла нет!');
}

try{
    await fs.access('1.txt', constants.F_OK);
    console.log('Файл существует');
}
catch{
    console.error('Такого файла нет!');
}