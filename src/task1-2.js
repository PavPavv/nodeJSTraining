const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

const csvPath = path.join(__dirname, './csv/file.csv');
const textPath = path.join(__dirname, 'file.txt');


const processLineByLine = async () => {
  const readStream = fs.createReadStream(csvPath, {
    highWaterMark: 10,
  });
  const writeStream = fs.createWriteStream(textPath, 'utf-8');

  readStream.pipe(csv()).pipe(writeStream);

  readStream.on('end', () => {
    writeStream.end();
    console.log('The file has been written.')
  });

  readStream.on('error', (error) => {
    console.log('problem with reading file', error);
  });

  writeStream.on('error', (error) => {
    console.log('problem with writing file', error);
  });
}; 
processLineByLine();