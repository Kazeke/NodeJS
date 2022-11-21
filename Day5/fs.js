import fs from 'fs/promises';
import { constants } from 'fs';

fs.access('text.txt', constants.F_OK).then(() => {
    console.log('Файл существует');
}).catch(() => {
    console.error('Такого файла нет!');
});