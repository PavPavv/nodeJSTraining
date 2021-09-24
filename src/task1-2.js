const fs = require('fs');
const csv = require('csvtojson');

const csvPath = './src/csv/file.csv';

fs.readFile(csvPath, 'utf8', (error, file) => {
  if (error) {
    return console.error(error.message);
  }

  csv()
    .fromFile(csvPath)
    .then((jsonObj)=>{
      const str = jsonObj.map(item => JSON.stringify(item)).join('\n');

      fs.writeFile('./src/file.txt', str, 'utf8', (error) => {
        console.log('file has been written');
      });
    })
});

console.log('Loading...')