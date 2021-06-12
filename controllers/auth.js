const admin = require('firebase-admin');
const db = admin.firestore();

//@descrip   Login mediante correo y contraseña.
//@route POTS /api/login

exports.postLogin = async (req, res) => {

    const uid = req.query.uid;
    const displayName = req.query.displayName;

    


    

    console.log(uid)
    console.log(displayName)




    // db.auth().singInWithEmailAndPassword(email, password)
    //     .then(({ user }) => {
    //         console.log(user.uid, user.displayName);
    //     })
    //     .catch(e => {
    //         console.log(e);
    //     })



}


// const startLogin =( email, password)=>{

//     firebase.auth().singInWithEmailAndPassword( email, password)
//     .then ( ({ user }) => {
//      login( user.uid, user.displayName ) ;
//     })
//     .catch (e =>{
//         console.log(e);
//     })
// }

