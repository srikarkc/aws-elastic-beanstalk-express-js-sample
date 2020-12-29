const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is owned by Srikar now! This is the full pipeline test now.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
