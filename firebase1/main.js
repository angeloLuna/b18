var btnInitSesion = document.getElementById("iniciar-sesion");
var btnCloseSesion = document.getElementById("cerrar-sesion");
var usuario = {}
var ref = "usuarios"


// Funcion del boton de iniciar sesion
btnInitSesion.addEventListener('click', function(){

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // // The signed-in user info.
    var user = result.user;
  }).catch(function(error){
    console.log(error)
  })
})

// funcion del boton cerrar sesion
btnCloseSesion.addEventListener('click', function(){

  // console.log("cerrar sesion")
  firebase.auth().signOut();

})



function initApp(){
  firebase.auth().onAuthStateChanged(function(user){
    if(user) {
      // console.log(user);
      usuario = {
        nombre: user.displayName,
        email: user.email,
        uid: user.uid,
        img: user.photoURL
      };
      console.log(usuario)
      btnInitSesion.style.display = 'none';
      btnCloseSesion.style.display = "inline-block";
      pushUser()
    }else{
      console.log("no hay usuario");
      btnInitSesion.style.display = 'inline-block';
      btnCloseSesion.style.display = "none";
    }
  })
}

function show(){
  firebase.database().ref(ref).on('value', function(data){

    console.log(data.val())

  })
}


function pushUser(){
  console.log("push")
  firebase.database().ref(ref +"/"+ usuario.uid).set(usuario)
  .catch(function(error){
    console.log(error)
  })

}


window.onload = function() {
  initApp();
};