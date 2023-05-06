var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    // scrolling up
    document.getElementById("main-menu").classList.remove("hidden");
  } else {
    // scrolling down
    document.getElementById("main-menu").classList.add("hidden");
  }
  
  prevScrollPos = currentScrollPos;
}

