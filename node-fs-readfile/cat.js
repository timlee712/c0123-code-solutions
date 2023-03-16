import { readFile } from 'node:fs/promises';

const files = process.argv.slice(2);

Promise.all(files.map((file) => readFile(file, 'utf-8')))
  .then((contents) => {
    console.log(contents.join('\n'));
  })
  .catch((error) => {
    console.error(error);
  });
