const router = require('express').Router();
const Ficha = require('../models/Ficha');

// GET/main/index
router.get('/index', (req, res) => {
    res.render('main/index')

});

// GET/main/about
router.get('/about', (req, res) => {
    res.render('main/about')

});


module.exports = router;

