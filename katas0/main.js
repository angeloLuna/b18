// 'use strict';

// var tama = prompt("dime el tamaño del arreglo (Debe ser par): ");

// if((tama % 2) == 0){
//   var arreglo = [];
//   for (var i = 1; i <= tama; i++){
//     arreglo[i-1] = prompt("dime el elemento " + i + " del arreglo:");
//     console.log("El elemento " + i + " del arreglo es " + arreglo[i-1])
//   }
//   console.log("el tamaño del arreglo es " + tama +
//     " y el máximo de la multiplicación es " + multiplica(tama, arreglo));
// }
// else{
//   console.log("Debe introducir un número par!!")
// }

// function multiplica(tamanio, arreg){
//   var max = arreg[0]*arreg[1];
//   var aux = 0;
//   // var itera = tamanio / 2;
//   console.log("itera = " + itera)
//   for(var j = 0; j < tamanio; j++){
//     aux = arreg[j]*arreg[++j]
//     console.log("itera j=" + j + " El valor de aux es " + aux + " y el de max es " + max)
//     if(aux > max){
//       max = aux;
//     }
//   }
//   return max
// }

// -----------------------------------------------------------

// function greatestmultiple(a,b,c,d,e,f){
//     var result =0
//     var array = [a,b,c,d,e,f]
//     var i = 0
//     // igualar al resultado del primer elemento del array por el segundo
//     var greatest = a
//     var current = 0
//     for (i = 0; i < array.length; i++ ) {
//         current = array[i]*array[i+1]
//         if (current > greatest) {
//             greatest=current
//         }   
//     }
//     console.log(greatest)
// }
// greatestmultiple(23,-4,3,-8,12)


// ----------------------------------------------------------------
 // este solo funciona con numeros positivos
// var input = [10,10,1,1];
// var resultado = 0;
// var resultado2 = 0;

// function multiplicador(input){

//   for (var i = 0 ; i < input.length -1; i++) {
//     resultado = input[i]*input[i+1];

//     if(resultado > resultado2){
//       resultado2 = resultado;
//     }else{
//       resultado = resultado
//     }
//   }
//   console.log(resultado2);
// }

// multiplicador(input);

// ----------------------------------------------

// var array_mult = [2,5,3,8,2,10];
// var array_result = [];

// function number_array(numbers) {
//   let result = 0
//   let mayor = 0
//   let pair = []
//   let none = []
//   for(let n in numbers){
//     result += numbers[n];
//     if (mayor <= numbers[n])
//       mayor = numbers[n];
//     if (numbers[n] % 2 == 0)
//       pair.push(numbers[n])
//     else
//       none.push(numbers[n])
//   }
//   array_result.push(mayor)
//   array_result.push(pair)
//   array_result.push(none)
//   array_result.push(result)
//   console.log(array_result)
// }

// number_array(array_mult)


// -------------------------------------------------------------

//usando math
// function numAdyacentes (arrNum){

//   this.arrNum =arrNum;
//   console.log("> numAdyacentes >>> this.arrNum  : "+this.arrNum )

//   if (this.arrNum.length %2 ==0){

//     console.log(">>>par>>>")
//     var arr = [];

//       for (var i = 0 ; i<this.arrNum.length;i++ ){
//           //this.arrNum[i]*this.arrNum[i+1]
//           if (!isNaN(this.arrNum[i+1])){
//             console.log( this.arrNum[i]*this.arrNum[i+1] )  
//             arr[i]= this.arrNum[i]*this.arrNum[i+1]
//           }
          

//       }

//       console.log(">>>>> El número mas grande es : "+Math.max.apply(null, arr));


//   } else {

//       console.log(">>>No par par>>>")

//   }
  
//   -----------------------------------------------------


// var arreglo = [1,2,3,4,5,6]

// function numeros(array){
//     var mayor = 0;
//     var pares = [];
//     var nones = [];
//     var sumatoria = 0;
//     var i = 0;
//     var resultado = []

//     for (i = 0; i < array.length; i++){
//         sumatoria += array[i];

//         if (array[i] % 2 == 0){  //es par
//             pares.push(array[i]);
//         }else{  // es non
//             nones.push(array[i]);
//         }

//         if (array[i] > mayor){
//             mayor = array[i];
//         }
//     }
//     resultado.push(mayor);
//     resultado.push(pares);
//     resultado.push(nones);
//     resultado.push(sumatoria);
//     return resultado;

// }

// console.log(numeros(arreglo));