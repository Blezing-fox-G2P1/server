require('dotenv').config()
const express = require('express');
const routes = require('./routes/')
const errorHandler = require('./midlewares/errorHandler')
const cors = require('cors')
const PORT = process.env.PORT;


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/', routes);
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${port}`);
})