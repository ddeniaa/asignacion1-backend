//Aqui se realiza la configuracion de la conexion a la BD de firebase:


const admin = require('firebase-admin');

const serviceAccount = require("../ecommerce-app-bdd67-firebase-adminsdk-d3wlc-a7da9d3619.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ecommerce-app-bdd67-default-rtdb.firebaseio.com"
});

// const db = admin.database()

const db = async()=>{
    try {
        await admin.database();
        console.log('Se conecto a Firebase');
    } catch (error) {
        console.log(error.message)
        
    }
}

module.exports = db;