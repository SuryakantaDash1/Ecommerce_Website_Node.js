const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('shop.js', adminData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    
});




// // ...

// router.get('/', (req, res, next) => {
//     const filePath = path.join(__dirname, 'views', 'shop.html');
//     res.sendFile(filePath);
// });

module.exports = router;