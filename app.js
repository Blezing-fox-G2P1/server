require('dotenv').config()
const express = require('express');
const app = express();
const index = require('./routes/')
const cors=require('cors')

const PORT = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/', index);

app.listen(PORT, () => {
  console.log(`IS GO ${PORT}`);
})