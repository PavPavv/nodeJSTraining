const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

//const csvPath = './src/csv/file.csv';
const csvPath = path.join(__dirname, './csv/file.csv');

fs.readFile(csvPath, 'utf8', (error, file) => {
  if (error) {
    return console.error(error.message);
  }

  csv()
    .fromFile(csvPath)
    .then((jsonObj)=>{
      const str = jsonObj.map(item => JSON.stringify(item)).join('\n');

      fs.writeFile(path.join(__dirname, './file.txt'), str, 'utf8', (error) => {
        console.log('file has been written');
      });
    });
});

console.log('Loading...')