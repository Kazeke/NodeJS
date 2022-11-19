import fs from 'fs';

let about = 'Столица Великобритании - Ващингтон';
let page = 'readme.txt';

fs.writeFileSync(page, about);