// function checkPalindrome(inputString) {
//     let length = inputString.length;
//     let array = []
//     let word = ""
//     for(let i in inputString){
//         array[length - i] = inputString[i];
//     }
//     for(let i in array){
//         word += array[i]
//     }
//     if(word == inputString){
//         return true;
//     }else {
//         return false
//     }
// }

// console.log(checkPalindrome("oso"))
// --------------------------------------------------------------
// function esPalindromo(palabra){
//     for(var i = 0; i < palabra.length; i++){                      
//         if( ! (palabra[i] === palabra[ palabra.length - (i + 1) ]) )
//             return false;
//     }
//     return true;
// }

// console.log(esPalindromo("mesa"));
// ----------------------------------------------------------------
// 'use strict'
// var palabra = 'reconocer'
// function palindromo(cadena){
//     var i = 0;
//     var j = 0;
//     var arr1 = [];
//     var arr2 = [];

//     for (i = 0; i < cadena.length/2; i++){
//         arr1.push(cadena[i]);
//     }
//     for(j = cadena.length-1; j >= i-1; j--){
//         arr2.push(cadena[j]);
//     }
//     if (arr1.toString() == arr2.toString()){
//         console.log(cadena + ' es palindromo');
//     }else{
//         console.log(cadena + ' no es palindromo');
//     }
// }
// palindromo(palabra);
// ----------------------------------------------------------------

// var palabra = prompt("Ingrese palabra")
// function reverse(str) { 
//   var reverse = '';
//   for (var i = str.length - 1; i >= 0 ; i--) {
//     reverse += str[i];
//     console.log(reverse)
//   }
//   if(reverse===palabra){
//     console.log("La palabra es palindroma");
//   }else{
//     console.log("La palabra no es palindroma")
//   }
// }
// reverse(palabra);
// -------------------------------------------------------

// function doLoadPalindromoJSOnly (){
    
//     var a = prompt("Js Only Escribe una frase : ");
//     var b = a;
//     console.log(">>>> : "+a);
//     var strTst=""
//     for (var i = a.length-1;i>=0;--i){
//         strTst+=a[i]
//         console.log(a[i]);
//         //console.log= (b[1]=a[i])   
//     }
//     if (a==strTst){
//         console.log("true")
//     }else {console.log("false")}

     
    
// }
// doLoadPalindromoJSOnly()
