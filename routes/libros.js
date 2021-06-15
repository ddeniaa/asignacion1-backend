const express = require('express');
const router = express.Router(); // sirve para creear las rutas.
const {
    getLibros,
    getLibro,
    getLibroName,
    getLibroPalabraClave,
    getLibroCategoria,
    getLibroCalificacionAsc,
    getLibroCalificacionDesc
   
}
    = require('../controllers/libros');




router.route('/listalibros').get(getLibros);
router.route('/listalibros/libro/:id').get(getLibro);
router.route('/libros/titulo/:titulo').get(getLibroName);
router.route('/libros/categoria/:categoria').get(getLibroCategoria);
router.route('/librosasc/calificaciones').get(getLibroCalificacionAsc);
router.route('/librosdesc/calificaciones').get(getLibroCalificacionDesc);
router.route('/libros/palabrasClaves/:palabrasClaves').get(getLibroPalabraClave);



// router.route('/libro/hola').get(hola);



module.exports = router;