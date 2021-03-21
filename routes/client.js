const router = require('express').Router();
const Ficha = require('../models/Ficha');

// GET/client/index
router.get('/index', (req, res) => {
    Ficha.find()
        .then(fichas => {
            res.render('client/index', { fichas });
        })
        .catch(error => console.log(error));
});

//GET - /client/close
router.get('/close', (req, res) => {
    res.render('client/close')
});


//GET - /client/new
router.get('/new', (req, res) => {
    res.render('client/new')
});

//GET /client/delete/IDFICHA
router.get('/delete/:idFicha', (req, res) => {
    Ficha.findByIdAndDelete(req.params.idFicha)
        .then(fichaBorrada => {
            res.redirect('/client/index');
        })
        .catch(error => console.log(error));
});

// //GET /client/edit/IDFICHA
router.get('/edit/:idFicha', (req, res) => {
    Ficha.findById(req.params.idFicha)
        .then(ficha => res.render('client/edit', { ficha }))
        .catch(error => console.log(error));
});


//POST /client/create
router.post('/create', (req, res) => {
    Ficha.create(req.body)
        .then(nuevaFicha => res.redirect('/client/index'))
        .catch(error => console.log(error))
});

// POST /client/update
router.post('/update', (req, res) => {
    Ficha.findByIdAndUpdate(req.body.id, req.body, { new: true })
        .then(fichaEditada => res.redirect('/client/index'))
        .catch(error => console.log(error))
});


module.exports = router;