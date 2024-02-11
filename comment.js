// Create web server
// Set up routes
// Set up static assets
// Set up middleware
// Set up error handling
// Listen
// Create routes
// Create middleware
// Create error handling

// Require express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Create web server
const app = express();

// Set up routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/comment', (req, res) => {
  console.log(req.body);
  res.end();
});

// Set up static assets
app.use(express.static('public'));

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Set up error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

// Listen
app.listen(3000, () => {
  console.log('Listening on port 3000');
});