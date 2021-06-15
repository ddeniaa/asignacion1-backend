const admin = require('firebase-admin');
const db = admin.firestore();




//@decrip  Cargar de BD la lista de libros 
//@route GET /api/libros/listalibros
exports.getLibros = async (req, res) => {
    try {
        const query = db.collection('books');
        const querySnap = await query.get();
        const docs = querySnap.docs

        const data = docs.map((doc) => ({
            id: doc.id,
            titulo: doc.data().titulo,
            img: doc.data().img,
            autor: doc.data().autor,
            descripCorta: doc.data().descripCorta,
            descripLarga: doc.data().descripLarga,
            palabrasClaves: doc.data().palabrasClaves,
            categoria: doc.data().categoria,
            calificacion: doc.data().calificacion,

        }));




        if (data.length === 0) {
            return res.status(404).json({
                exitoso: false,
                mensaje: 'No hay datos aun.'
            })
        }

        return res.status(200).json({
            exitoso: true,
            mensaje: 'Se encontraron los datos',
            data: data
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            exitoso: false,
            mensaje: 'Error en el Servidor'
        })
    }

}



//@decrip  Cargar la info de un solo libro.
//@route GET /api/libros/listalibros/libro/:id
exports.getLibro = async (req, res) => {
    try {

        const idParam = req.params.id
        // console.log(idParam);
        const query = db.collection('books').doc(`${idParam}`);
        // console.log(query);
        const querySnap = await query.get();
        // console.log(querySnap);
        const data = querySnap.data();
        // console.log(data)

        if (!data) {
            return res.status(404).json({
                exitoso: false,
                mensaje: 'No hay datos aun.'
            })
        }

        return res.status(200).json({
            exitoso: true,
            mensaje: 'Se encontraron los datos',
            data
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            exitoso: false,
            mensaje: 'Error en el Servidor'
        })

    }
}


//@decrip  hace una busqueda de la info del libro por nombre.
//@route GET /api/libros/libros/titulo/:titulo
exports.getLibroName = async (req, res) => {

    try {
        const titulo = req.params.titulo

        const query = db.collection('books');
        const querySnap = await query.where('titulo', '==', titulo).get();
        const docs = querySnap.docs

        const data = docs.map((doc) => ({
            id: doc.id,
            titulo: doc.data().titulo,
            img: doc.data().img,
            autor: doc.data().autor,
            descripCorta: doc.data().descripCorta,
            descripLarga: doc.data().descripLarga,
            palabrasClaves: doc.data().palabrasClaves,
            categoria: doc.data().categoria,
            calificacion: doc.data().calificacion,

        }));

        // console.log(data);

        if (data.length === 0) {
            return res.status(404).json({
                exitoso: false,
                mensaje: 'No hay datos aun.'
            })
        }

        return res.status(200).json({
            exitoso: true,
            mensaje: 'Se encontraron los datos',
            data: data
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            exitoso: false,
            mensaje: 'Error en el Servidor'
        })

    }

}




//@decrip  hace una busqueda de la info del libro por categoria.
//@route GET /api/libros/libros/categoria/:categoria
exports.getLibroCategoria = async (req, res) => {

    try {

        const categoria = req.params.categoria
        const query = db.collection('books');
        const querySnap = await query.where('categoria', '==', categoria).get();
        const docs = querySnap.docs

        const data = docs.map((doc) => ({
            id: doc.id,
            titulo: doc.data().titulo,
            img: doc.data().img,
            autor: doc.data().autor,
            descripCorta: doc.data().descripCorta,
            descripLarga: doc.data().descripLarga,
            palabrasClaves: doc.data().palabrasClaves,
            categoria: doc.data().categoria,
            calificacion: doc.data().calificacion,

        }));

        //console.log(data)

        if (data.length === 0) {
            return res.status(404).json({
                exitoso: false,
                mensaje: 'No hay datos aun.'
            })
        }

        return res.status(200).json({
            exitoso: true,
            mensaje: 'Se encontraron los datos',
            data: data
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            exitoso: false,
            mensaje: 'Error en el Servidor'
        })

    }
}


//@decrip  Obtiene la calificacion filtrada en orden ascendente:
//@route GET /api/libros/librosasc/calificaciones
exports.getLibroCalificacionAsc = async (req, res) => {

    try {

        const query = db.collection('books');
        const querySnap = await query.where('calificacion', '<=', 3).get();
        const docs = querySnap.docs


        const data = docs.map((doc) => ({
            id: doc.id,
            titulo: doc.data().titulo,
            img: doc.data().img,
            autor: doc.data().autor,
            descripCorta: doc.data().descripCorta,
            descripLarga: doc.data().descripLarga,
            palabrasClaves: doc.data().palabrasClaves,
            categoria: doc.data().categoria,
            calificacion: doc.data().calificacion,

        }));
        if (data.length === 0) {
            return res.status(404).json({
                exitoso: false,
                mensaje: 'No hay datos aun.'
            })
        }

        return res.status(200).json({
            exitoso: true,
            mensaje: 'Se encontraron los datos',
            data: data
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            exitoso: false,
            mensaje: 'Error en el Servidor'
        })

    }

}



//@decrip  Obtiene la calificacion filtrada en orden descendente:
//@route GET /api/libros/librosdesc/calificaciones
exports.getLibroCalificacionDesc = async (req, res) => {

    try {

        const query = db.collection('books');
        const querySnap = await query.where('calificacion', '>=', 4).get();
        const docs = querySnap.docs


        const data = docs.map((doc) => ({
            id: doc.id,
            titulo: doc.data().titulo,
            img: doc.data().img,
            autor: doc.data().autor,
            descripCorta: doc.data().descripCorta,
            descripLarga: doc.data().descripLarga,
            palabrasClaves: doc.data().palabrasClaves,
            categoria: doc.data().categoria,
            calificacion: doc.data().calificacion,

        }));

        if (data.length === 0) {
            return res.status(404).json({
                exitoso: false,
                mensaje: 'No hay datos aun.'
            })
        }

        return res.status(200).json({
            exitoso: true,
            mensaje: 'Se encontraron los datos',
            data: data
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            exitoso: false,
            mensaje: 'Error en el Servidor'
        })

    }

}





//@decrip  hace una busqueda de la info del libro por palabraClave.
//@route GET /api/libros/palabrasClaves/:palabrasClaves
exports.getLibroPalabraClave = async (req, res) => {

    try {

        const palabraclave = req.params.palabrasClaves
        //console.log(palabraclave)
        const query = db.collection('books');
        const querySnap = await query.where('palabrasClaves', 'array-contains', palabraclave).get();
        const docs = querySnap.docs

        //console.log(docs)

        const data = docs.map((doc) => ({
            id: doc.id,
            titulo: doc.data().titulo,
            img: doc.data().img,
            autor: doc.data().autor,
            descripCorta: doc.data().descripCorta,
            descripLarga: doc.data().descripLarga,
            palabrasClaves: doc.data().palabrasClaves,
            categoria: doc.data().categoria,
            calificacion: doc.data().calificacion,

        }));


        if (data.length === 0) {
            return res.status(404).json({
                exitoso: false,
                mensaje: 'No hay datos aun.'
            })
        }

        return res.status(200).json({
            exitoso: true,
            mensaje: 'Se encontraron los datos',
            data: data
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            exitoso: false,
            mensaje: 'Error en el Servidor'
        })

    }
} 

// exports.hola = async (req, res) => {
//     console.log("Connected to React");
//     res.status(200).json({
//         msg: 'conectado '
//     });
//   }















