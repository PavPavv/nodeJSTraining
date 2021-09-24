process.stdout.write('Write down a string' + '\n');

process.stdin.on('data', data => {
  process.stdout.write(data
                        .toString()
                        .split('')
                        .reverse()
                        .join('')
                        .trim() 
                        + '\n\n\n');
});