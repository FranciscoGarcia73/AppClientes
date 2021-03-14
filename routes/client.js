const router = require('express').Router();
const Ficha = require('../models/Ficha');

// GET/client
router.get('/', (req, res) => {
    Ficha.find()
        .then(fichas => {
            res.render('client/index', { fichas });
        })
        .catch(error => console.log(error));


});

//GET - /clientes/nuevo
router.get('/new', (req, res) => {
    res.render('client/new')


});

// //GET /clientes/delete/IDCLIENTE
// router.get('/delete/:idCliente', (req, res) => {
//     Cliente.findByIdAndDelete(req.params.idCliente)
//         .then(clienteBorrado => {
//             res.redirect('/clientes');
//         })
//         .catch(error => console.log(error));
// });

// //GET /clientes/editar/IDCLIENTE
// router.get('/editar/:idCliente', (req, res) => {
//     Cliente.findById(req.params.idCliente)
//         .then(cliente => res.render('clientes/edit', { cliente }))
//         .catch(error => console.log(error));
// });


//POST
router.post('/create', (req, res) => {
    Ficha.create(req.body)
        .then(nuevaFicha => {
            console.log(nuevaFicha);
            res.redirect('/client');
        })
        .catch(error => console.log(error))
});

// router.post('/update', (req, res) => {
//     req.body.cuota = parseFloat(req.body.cuota);
//     req.body.activo = req.body.activo ? true : false;

//     Cliente.findByIdAndUpdate(req.body.id, req.body, { new: true })
//         .then(clienteEditado => res.redirect('/clientes'))
//         .catch(error => console.log(error))
// });


module.exports = router;