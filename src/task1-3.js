import { readFile, writeFile } from 'fs';
import { join } from 'path';
import csv from 'csvtojson';

const csvPath = join(__dirname, './csv/file.csv');

readFile(csvPath, 'utf8', (error, file) => {
  if (error) {
    return console.error(error.message);
  }

  csv()
    .fromFile(csvPath)
    .then((jsonObj)=>{
      const str = jsonObj.map(item => JSON.stringify(item)).join('\n');

      writeFile(join(__dirname, './file.txt'), str, 'utf8', (error) => {
        console.log('file has been written');
      });
    });
});

console.log('Loading...');