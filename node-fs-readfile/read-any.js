import { readFile } from 'node:fs';

const file = process.argv[2];
readFile(file, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
