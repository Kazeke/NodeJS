import fs from 'fs';

// let text = fs.readFileSync('readme.txt, 'utf8');

try{
  let text = fs.readFileSync('readme.txt', 'utf8');
  console.log(text);
} catch(err){
  console.log('при чтении файла возникла ошибка')
}