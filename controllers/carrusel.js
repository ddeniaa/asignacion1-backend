const admin = require('firebase-admin');
const db = admin.firestore();




//@decrip  Cargar de BD la lista de img del carrusel.
//@route GET /api/carrusel/listaimg
exports.getImgCarrusel = async (req, res) => {
    try {
        const query = db.collection('banners');
        const querySnap = await query.get();
        const docs = querySnap.docs

        const data = docs.map((doc) => ({
            id: doc.id,
            img: doc.data().img, 

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