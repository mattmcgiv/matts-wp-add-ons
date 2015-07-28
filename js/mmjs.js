console.log("JS loaded");

function changeColorOnMouseover(slug) {
  var x = document.getElementById(slug);
  x.style.color = 'white';
}

function changeColorOnMouseout(slug) {
  var y = document.getElementById(slug);
  y.style.color= 'transparent';
}
