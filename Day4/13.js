import fs from 'fs/promises';

async function multiUniverse(){
    try{
        let superheroes = ["sp.txt", "hk.txt", "bt.txt"];
        let heroes = [];

        for(let myHeroes of superheroes){
            heroes.push(await fs.readFile(myHeroes, "utf8"));
        }
        await fs.writeFile("res.txt", "Мои любимые герои это - " + heroes.join(', '));
    }catch(err){
        console.log("Смотри внимательнее ", err);
    }
}
multiUniverse();