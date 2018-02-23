var btnInitSesion = document.getElementById("iniciar-sesion");
var btnCloseSesion = document.getElementById("cerrar-sesion");


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
      console.log("hay usuario");
      var usuario = {
        nombre: user.displayName,
        email: user.email,
        uid: user.uid
      };
      console.log(usuario)
      btnInitSesion.style.display = 'none';
      btnCloseSesion.style.display = "inline-block"
    }else{
      console.log("no hay usuario");
      btnInitSesion.style.display = 'inline-block';
      btnCloseSesion.style.display = "none"
    }
  })
}


window.onload = function() {
  initApp();
};