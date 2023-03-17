const express = require('express');
const server = express();
const router = require('./routes/router');
const PORT = process.env.PORT || 3000;
// ----------------------------------------------

// Set View Engine so the server knows to use ejs
server.set('view engine', 'ejs');

// Server will break on this step (middleware error) We are importing the router here but it has not been exported at this point.
server.use('/', router)

// PORT Listner
// ----------------------------------------------
server.listen(PORT, ()=> console.log(`You killin me SMALLS, because your PORT ${PORT} is always working!`))
