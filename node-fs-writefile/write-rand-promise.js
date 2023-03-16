import { writeFile } from 'node:fs/promises';

const randomNumber = Math.random();

writeFile('random.txt', randomNumber.toString() + '\n')
  .catch((err) => console.error(err));
