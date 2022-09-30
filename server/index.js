const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));

app.use('/', router);


app.listen(port, () =>  {
  console.log(`Listening on port: ${port}`);
});