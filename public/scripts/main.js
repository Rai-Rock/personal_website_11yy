

//seleziono il bottone t0-top
let mybutton = document.getElementById("top-btn");

// Quando utente scrolla per 450px dall'inizio documento , mostra il bottone "to-top"
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//Utente pigia sul bottone e ritorna ad inizio pagina
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


