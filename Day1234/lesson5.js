import fs from 'fs';

let about1 = 'Столица Великобритании - zzzzzz';
let page1 = '1.txt';

fs.writeFileSync(page1, about1);

let about2 = 'Столица Великобритании - xxxxxxx';
let page2 = '2.txt';

fs.writeFileSync(page2, about2);