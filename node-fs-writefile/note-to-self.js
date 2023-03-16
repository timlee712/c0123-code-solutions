import { writeFile } from 'node:fs';

if (process.argv.length < 3) {
  console.error('Please provide a note as the third argument!');
  process.exit(1);
}

const note = process.argv[2];

writeFile('note.txt', note + '\n', (err) => {
  if (err) throw err;
});
