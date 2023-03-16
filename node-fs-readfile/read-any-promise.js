import { readFile } from 'node:fs/promises';
const file = process.argv[2];

readFile(file, { encoding: 'utf8' })
  .then((contents) => {
    console.log(contents);
  })
  .catch((err) => {
    console.error(err.message);
  });
