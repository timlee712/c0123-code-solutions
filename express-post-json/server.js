import express from 'express';
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  grade.id = nextId;
  grades[nextId] = grade;
  nextId++;
  res.status(201).json(grade);
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
