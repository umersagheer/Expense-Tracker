const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');


dotenv.config({ path: './config/config.env' })

const transaction = require('./routes/transaction')

const app = express();

app.use('/', transaction)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} and on port ${PORT}`.yellow.bold));