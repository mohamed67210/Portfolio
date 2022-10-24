// ************** changer color de navbar quand on scroll en bas
window.addEventListener("scroll", function () {
  // aller pointer a l'element header de notre page html
  var header = document.querySelector("header");
  header.classList.toggle("stickey", window.scrollY > 0);
})

// ************** btn scroll to top (affichage + monter )
let mybutton = document.getElementById("scrolltop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// *************** menu burger
const hamburger = document.querySelector('.nav_toggler')
const navigationlinks = document.querySelector('nav')
const links = document.getElementsByClassName('nav_link')
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active")
  navigationlinks.classList.toggle("active")
})
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    navigationlinks.classList.toggle("active")
    console.log('yes')
    hamburger.classList.toggle("active")
  })
}


