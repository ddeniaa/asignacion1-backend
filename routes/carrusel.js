const express = require('express');
const router = express.Router(); // sirve para creear las rutas.
const { getImgCarrusel } = require('../controllers/carrusel');




router.route('/listaimg').get(getImgCarrusel);



module.exports = router;