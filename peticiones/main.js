function loadDoc() {
  var xhttp = new XMLHttpRequest();
  console.log(xhttp);
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     var response = xhttp.response;
     response =JSON.parse(xhttp.response);

     document.getElementById("name").innerHTML = response.name;
     loadFilms(response.films[0])
    }else{
      console.log("-_-")
    }
  };
  xhttp.open("GET", "https://swapi.co/api/people/4", true);
  xhttp.send();
}

loadDoc()

function loadFilms(url) {
  var xhttp = new XMLHttpRequest();
  console.log(xhttp);
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     var response = xhttp.response;
     response =JSON.parse(xhttp.response);

     console.log(response)
     document.getElementById("films").innerHTML = response.title;
    }else{
      console.log("-_-")
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
