import { writeFile } from 'node:fs';

const randomNumber = Math.random();

writeFile('random.txt', randomNumber.toString() + '\n', (err) => {
  if (err) throw err;
});
