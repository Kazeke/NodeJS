import fs from 'fs';

async function goblin(){
    try{
        let info = await fs.promises.readFile("res2.txt", "utf8");
        console.log(info);
    }catch(err){
        console.log("Что-то пошло не так", err);
    }
}
goblin();