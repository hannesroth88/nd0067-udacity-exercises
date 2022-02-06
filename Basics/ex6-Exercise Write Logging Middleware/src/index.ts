import express from 'express';
import logger from './utilities/logger'
import logger2 from './utilities/logger2'

const app = express();
const port = 3000;


app.get('/countries', logger, logger2, function (req, res) {
  res.send('countries Route');
});


app.get('/oceans', logger, logger2, function (req, res) {  
  res.send('oceans Route');
});


app.get('/peoples', logger, logger2, function (req, res) {
  res.send('peoples Route');
});


// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});