const express = require('express');
const app = express();

const PORT = 3005

let counter = 0;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ counter: counter });
});

app.get('/increment', (req, res) => {
    counter++;
    res.json({ counter: counter });
});

app.get('/decrement', (req, res) => {
    counter--;
    res.json({ counter: counter });
});

app.listen(PORT, () => {
    console.log('Server running at http://localhost:3000/');
});