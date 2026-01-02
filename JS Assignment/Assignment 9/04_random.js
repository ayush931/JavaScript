const express = require('express');
const app = express();
const port = 3003;

app.get('/random', (req, res) => {
 const randomNumber = Math.floor(Math.random() * 100);
 res.send({ random: randomNumber });
});

app.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`);
});