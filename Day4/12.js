import fs from 'fs';

async function hulk(){
    try{
        let num1 = await fs.promises.readFile("file1.txt", "utf8");
        let num2 = await fs.promises.readFile("file2.txt", "utf8");
        let num3 = await fs.promises.readFile("file3.txt", "utf8");        
        

        let result = Number(num1)**2 + Number(num2)**2 + Number(num3)**2;
        console.log("Тип: " + typeof(result));

        console.log("Результат: " + result);
        await fs.promises.writeFile("res.txt", String(result));
    }catch(err){
        console.log("Смотри внимательнее ", err);
    }
}
hulk();