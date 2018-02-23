

document.addEventListener('DOMContentLoaded',function() {
    document.getElementById("input1").onchange=set;
},false);

function set (){
  console.log("a")
  var input = document.getElementById("input1").value
  document.getElementById("setEmail").innerHTML = input;
}
