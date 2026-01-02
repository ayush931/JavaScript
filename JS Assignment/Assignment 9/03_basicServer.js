const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
 res.send({ msg: 'I am homepage' });
});

app.get('/about', (req, res) => {
 res.send({ msg: 'I am about page' });
});

app.get('/contact', (req, res) => {
 res.send({ email: 'support@pwskills.com' });
});

app.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`);
});