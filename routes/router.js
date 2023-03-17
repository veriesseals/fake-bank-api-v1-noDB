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
router.use('/fakebank', datCheddahFDICRoutes)

// Create Home Route
// ---------------------------------------------
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Dat Cheddah FDIC API',
        name: 'Dat Cheddah FDIC API'
    })
});

// All Transactions
// ------------------------------------------------------
router.get('/transactions', async (req, res) => {
    const response = await fetch('https://api.sampleapis.com/fakebank/accounts');
    const data = await response.json();
    res.render('pages/transactions',
    { accounts: data });
});
// ------------------------------------------------------

// All Descriptions
// ------------------------------------------------------
router.get('/description', async (req, res) => {
    const response = await fetch('https://api.sampleapis.com/fakebank/accounts');
    const data = await response.json();
    res.render('pages/description',
    { accounts: data });
});
// ------------------------------------------------------

//All Categories
// ------------------------------------------------------
router.get('/category', async (req, res) => {
    const response = await fetch('https://api.sampleapis.com/fakebank/accounts');
    const data = await response.json();
    res.render('pages/category',
    { accounts: data });
});
// ------------------------------------------------------

//All Debits
// ------------------------------------------------------
router.get('/debit', async (req, res) => {
    const response = await fetch('https://api.sampleapis.com/fakebank/accounts');
    const data = await response.json();
    res.render('pages/debit',
    { accounts: data });
});

//All Credits
// ------------------------------------------------------
router.get('/credit', async (req, res) => {
    const response = await fetch('https://api.sampleapis.com/fakebank/accounts');
    const data = await response.json();
    res.render('pages/credit',
    { accounts: data });
});
// ------------------------------------------------------
// Error Route
// ---------------------------------------------
router.get('*', (req, res)=> {
    if(req.url == '/favicon.ico/') {
        res.end();
    } else {
        res.send('<h1>404 Nah Mane. This ain\'t where it\'s at!</h1>')
    }
})

module.exports = router;