import fs from 'fs/promises';
import { constants } from 'fs';

fs.access('1.txt', constants.F_OK).then(() => {
    console.log('Файл существует');
}).catch(() => {
    console.error('Такого файла нет!')
});

fs.access('5.txt', constants.F_OK).then(() => {
    console.log('Файл существует');
}).catch(() => {
    console.error('Такого файла нет!')
});