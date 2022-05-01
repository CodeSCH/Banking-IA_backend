const express = require('express');

require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/db.js');

const app = express();
dbConnection();
app.use(cors());
app.use(express.json());

/*
app.use('/api/auth', require('./routes/auth'));
app.use('/api/testimonial', require('./routes/testimonial'));
app.use('/api/appointment', require('./routes/appointment'));*/


app.listen(process.env.PORT, () => {
  console.log(`Runnning on port ${process.env.PORT}`);
});