const express = require('express');
const app = express();
const index = require('./routes/')
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use('/', index);

app.listen(PORT, () => {
console.log(`IS GO PORT`);
})