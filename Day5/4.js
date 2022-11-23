import fs from 'fs/promises';
import { constants } from 'fs';

try{
    await fs.access('city3.txt', constants.R_OK | constants.W_OK);
    console.log('Файл можно читать');
}
catch{
    console.error('Файл нельзя читать');
}