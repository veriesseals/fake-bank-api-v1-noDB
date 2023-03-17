const express = require('express');
const router = express.Router();

// Fetch
// --------------------------------------------------
const fetch = (...args)=> import('node-fetch').then(({default: fetch}) => fetch(...args));

// Create Counter
// --------------------------------------------------
let count;

// Fetch our URL from Sample API's
// --------------------------------------------------
fetch('https://api.sampleapis.com/fakebank/accounts')
    .then(res => res.json())
    .then(data => count = data.length)

// Create path for our Home Page
// ---------------------------------------------
router.get('/', (req, res)=>{
    const url = 'https://api.sampleapis.com/fakebank/accounts'

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/home', {
                transactionDate: 'All Transactions',
                description: 'All Descriptions',
                category: 'All Category',
                debit: 'All Debits',
                credit: 'All Credits',
                data
            })
        })
});

// In the Online API there is a type category. We will add a path
// Adding type path => localhost:3000/account/:account
// ---------------------------------------------
router.get('/accounts/:accounts', (req, res)=>{
    const type = req.params.type
    const url = 'https://api.sampleapis.com/fakebank/accounts'

    fetch(url)
        .then(res=> res.json())
        .then(data => {
            // Create an Arry for the item types
            const accountsArr = []
            // push type items into the empty typeArr
            data.forEach(item => {
                if(item.accounts== accounts) {
                    accountsArr.push(item)
                }
            })

            return accountsArr
        })
        // Grouping all the games by type
        .then(accountsArr => {
            res.render('pages/accounts', {
                accounts: 'accounts',
                data: accountsArr
            })
        })
})

// jokes_single page
// localhost:3000/account/:id
// ---------------------------------------------
router.get('/:id', (req, res)=> {
    const id = req.params.id
    const url = `https://api.sampleapis.com/fakebank/accounts/${id}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/accounts_single', {
                title: `${data.setup}`,
                name: `${data.setup}`,
                data,
                count
            })
        })
})

module.exports = router;