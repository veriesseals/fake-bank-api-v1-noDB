const express = require('express');
const router = express.Router();
// ---------------------------------------------

// Path to handle Static Files with in the router
// ---------------------------------------------
router.use(express.static('public'));

// Create datCheddahFDICRoutes  Server will break until datCheddahFDICRoutes  is created
// ---------------------------------------------
const datCheddahFDICRoutes = require('./api/datCheddahFDICRoutes');

// Create path that will point to datCheddahFDICRoutes
// ---------------------------------------------
router.use('/accounts', datCheddahFDICRoutes)

// Create Home Route
// ---------------------------------------------
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Dat Cheddah FDIC API',
        name: 'Dat Cheddah FDIC API'
    })
});



module.exports = router;