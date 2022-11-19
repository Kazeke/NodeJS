import fs from 'fs';

async function spiderman(){
    let data = await fs.promises.readFile("res.txt", "utf8");
    console.log(data);
}
spiderman();