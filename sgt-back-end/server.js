import pg from 'pg';
import express from 'express';

const app = express();
app.use(express.json());
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const getAllGrades = `select *
                        from grades`;

// getting all grades
app.get('/api/grades', async (req, res) => {
  try {
    const result = await db.query(getAllGrades);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// getting a grade by id
app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId, 10);

    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
      return;
    }

    const sql = `
      select *
        from "grades"
      where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];

    if (grade) {
      res.json(grade);
    } else {
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// creating a new grade
app.post('/api/grades', async (req, res) => {
  const { name, course, score } = req.body;
  // checks for missing fields
  if (!name || !course || !score) {
    return res.status(400).send('Name, course, and score fields are required');
  }
  // checks that the score is an integer between 0 and 100
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    return res.status(400).send('Score must be an integer between 0 and 100');
  }
  try {
    const sql = `
      insert into grades(name, course, score)
        values ($1, $2, $3)
      returning *
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// updating a grade
app.put('/api/grades/:gradeId', async (req, res) => {
  const { name, course, score } = req.body;
  const gradeId = Number(req.params.gradeId);

  // check if gradeId is a number
  if (isNaN(gradeId)) {
    return res.status(400).json({ error: 'Invalid grade data' });
  }
  // check for missing fields
  if (!name || !course || !score) {
    return res.status(400).send('Name, course, and score fields are required');
  }
  try {
    const result = await db.query(`
      update grades
        set name = $1,
            course = $2,
            score = $3
      where "gradeId" = $4
      returning *
    `, [name, course, score, gradeId]);
    // check to see if gradeId exists
    if (result.rowCount === 0) {
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// delete grades
app.delete('/api/grades/:gradeId', async (req, res) => {
  const gradeId = Number(req.params.gradeId);

  // check if gradeId is a valid integer
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).send('Invalid gradeId');
  }
  try {
    const result = await db.query(`
      DELETE FROM grades
      WHERE "gradeId" = $1
      RETURNING *
    `, [gradeId]);
    if (result.rowCount === 0) {
      res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => {
  console.log('Listening to port 8080!');
});
