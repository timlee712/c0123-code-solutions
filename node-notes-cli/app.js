import { readFile, writeFile } from 'node:fs/promises';

const dataPath = 'data.json';

// read the notes in data.json
async function readNotes() {
  try {
    const data = await readFile(dataPath, 'utf8');
    const notes = JSON.parse(data).notes;
    Object.keys(notes).forEach((id) => { // Object.keys takes the notes and puts them into an array, then utilized forEach to go through every element in the array and log the id and notes
      console.log(`${id}: ${notes[id]}`);
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

// create new notes in data.json
async function createNotes() {
  try {
    const data = await readFile(dataPath, 'utf8');
    const idNotes = JSON.parse(data);
    const newId = idNotes.nextId.toString();
    const newNote = process.argv[3];
    idNotes.notes[newId] = newNote;
    const newData = JSON.stringify(idNotes, null, 2);
    if (process.argv[3] === undefined) { // error handling if the 4th argument is undefined
      console.error('Invalid note');
      process.exit(1);
    }
    console.log(`Successfully added note ${newId}`);
    await writeFile(dataPath, newData, 'utf8');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

// delete notes in data.json
async function deleteNotes() {
  try {
    const data = await readFile(dataPath, 'utf8');
    const idNotes = JSON.parse(data);
    const deleteId = process.argv[3];
    delete idNotes.notes[deleteId];
    const newData = JSON.stringify(idNotes, null, 2);
    if (isNaN(Number(process.argv[3]))) { // error handling if the 4th argument isn't a number
      console.error(`Invalid ID: ${process.argv[3]}`);
      process.exit(1);
    }
    console.log(`Successfully deleted note ${deleteId}`);
    await writeFile(dataPath, newData, 'utf8');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

// update existing notes in data.json
async function updateNotes() {
  try {
    const data = await readFile(dataPath, 'utf8');
    const idNotes = JSON.parse(data);
    const updatedId = process.argv[3];
    const updatedNotes = process.argv[4];
    idNotes.notes[updatedId] = updatedNotes;
    const newData = JSON.stringify(idNotes, null, 2);
    if (isNaN(Number(process.argv[3]))) { // error handling if the 4th argument isn't a number
      console.error(`Invalid ID: ${process.argv[3]}`);
      process.exit(1);
    }
    if (process.argv[4] === undefined) { // error handling if the 5th argument is undefined
      console.error('Invalid note');
      process.exit(1);
    }
    console.log(`Successfully updated note ${updatedId}`);
    await writeFile(dataPath, newData, 'utf8');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

// conditional for the 3rd argument in the command line
// it was pretty fun learning how to use ternary operators instead of if else statements
async function main() {
  const command = process.argv[2];
  return command === 'read'
    ? readNotes()
    : command === 'create'
      ? createNotes()
      : command === 'delete'
        ? deleteNotes()
        : command === 'update'
          ? updateNotes()
          : console.log(`Invalid command: ${command}`);
}

main();
