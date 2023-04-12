const express = require('express')
const bodyParser = require('body-parser')
const Employee = require('./model/employee')

const app = express()
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000

app.listen(3000, () => {
    console.log('Server started on port 3000');
  });

