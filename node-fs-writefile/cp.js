import { readFile, writeFile } from 'node:fs/promises';

async function copyFile(source, destination) {
  try {
    const data = await readFile(source);
    await writeFile(destination, data);
  } catch (err) {
    console.error(`An error occured while copying ${source} to ${destination}`);
    process.exit(1);
  }
}

if (process.argv.length !== 4) {
  console.error('Please enter 4 arguments: node cp.js <source> <destination>');
  process.exit(1);
}

const source = process.argv[2];
const destination = process.argv[3];

copyFile(source, destination);
