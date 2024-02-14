
let btn=document.querySelector(".button-click");
btn.addEventListener("click",()=>{

    let post=document.querySelector(".post-prop");
    post.classList.add("shown");
    btn.classList.add("none")
    
    
})





var input = document.querySelector("#phone");
window.intlTelInput(input, {
  separateDialCode: true
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()   






  var slideleft = {
    distance: '100%',
    origin: 'left',
    delay:700,
    interval:300,
};

ScrollReveal().reveal('.left-reveal', slideleft);

var slideright = {
    distance: '100%',
    origin: 'right',
    delay:700,
    interval:300,
};

ScrollReveal().reveal('.right-reveal', slideright);



var slidescale = {
    distance: '100%',
    origin: 'bottom',

    delay:500,
    interval:1000,
};

ScrollReveal().reveal('.scale-reveal', slidescale);