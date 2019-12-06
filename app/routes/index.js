const express = require('express')
const router =  express.Router()

// rutas

// Indice 
router.get('/', (req, res) => {
    res.render('index', {title: 'Que es instagram?'})
});

// Conctacto 

router.get('/contact', (req, res) => {
    res.render('contact', {contact: 'Usa intagram!'})
});
module.exports = router;