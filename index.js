const express = require('express');
const db = require('./db/db');
require('dotenv').config();
const router = require('./router/router');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;
const start = async () => {
  try {
    await db(process.env.url_db);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();

// middleware
app.use(express.json());
app.use(cors());

// router
app.use('/', router);
