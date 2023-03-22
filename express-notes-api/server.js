import express from 'express';
import { readFile, writeFile } from 'fs/promises';

const app = express();
app.use(express.json());

const dataPath = 'data.json';

app.get('/api/notes', async (req, res) => {
  try {
    const data = await readFile(dataPath, 'utf8');
    const notes = JSON.parse(data).notes;
    res.status(200).json(Object.values(notes));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error reading data file' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else {
    try {
      const data = await readFile(dataPath, 'utf8');
      const notes = JSON.parse(data).notes;
      if (notes[id]) {
        res.status(200).json(notes[id]);
      } else {
        res.status(404).json({ error: `cannot find note with id ${id}` });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error reading data file' });
    }
  }
});

app.post('/api/notes', async (req, res) => {
  const content = req.body.content;
  if (!content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    try {
      const data = await readFile(dataPath, 'utf8');
      const notes = JSON.parse(data).notes;
      const id = Object.keys(notes).length + 1;
      notes[id] = { id, content };
      await writeFile(dataPath, JSON.stringify({ notes }));
      res.status(201).json(notes[id]);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'An unexpected error occured.' });
    }
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const content = req.body.content;
  if (!id) {
    return res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!content) {
    return res.status(400).json({ error: 'content is a required field' });
  }
  readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An unexpected error occured.' });
    }
    const notes = JSON.parse(data).notes;
    if (!notes[id]) {
      return res.status(404).json({ error: `cannot find note with id ${id}` });
    }
    notes[id] = { id, content };
    writeFile('data.json', JSON.stringify({ notes }), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'An unexpected error occured.' });
      }
      res.status(200).json(notes[id]);
    });
  });
});

app.delete('/api/notes/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else {
    try {
      const data = await readFile(dataPath, 'utf8');
      const notes = JSON.parse(data).notes;
      if (notes[id]) {
        delete notes[id];
        await writeFile(dataPath, JSON.stringify({ notes }));
        res.sendStatus(204);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'An unexpected error occured.' });
    }
  }
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
