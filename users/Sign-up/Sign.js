
function password_show_hide() {
    var x = document.getElementById("password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }
  

  var slideUp = {
    distance: '60px',
    origin:'left',
    
    duration:2000,
    reset:false,
    delay:400,

};


ScrollReveal().reveal('#scroll-head,#foot-head',slideUp,{delay: 300,origin:'left',});

var slideDown = {
    distance: '60px',
    origin:'bottom',
    scale:3,
    
    duration:2000,
    reset:false,
    delay:400,

};
ScrollReveal().reveal('.logo',slideDown,{delay: 500,});