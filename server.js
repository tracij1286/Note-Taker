// dependencies
const express = require('express');

// express
const app = express();
const PORT = process.env.PORT || 3001;


// asks express to create a route for every file in the 'public' folder and give it a '/' route
app.use(express.static('public'));
// sets up express app to handel data parser, middle wear created req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// app listener to start the server
app.listen(PORT, () => {
  console.log(`Server available at localhost ${PORT}`);
});