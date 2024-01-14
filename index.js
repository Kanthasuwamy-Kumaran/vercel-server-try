import express from 'express';
// import { express } from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(3001, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
