var typed = new Typed('#element', {
  strings: [`at Online Property Club`],
  typeSpeed: 50,
  loop:true,
});













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



  let loanContent=document.querySelector(".loan-bank-name-content");
let loanButton=document.querySelector(".button-show");
console.log(loanButton);
console.log(loanContent);
loanButton.addEventListener("click",()=>{
  loanContent.classList.toggle("show-more-loan");

  if(loanButton.innerText === "Show More"){
    loanButton.innerText  = "Show Less"
  }else{
    loanButton.innerText = "Show More"
  }

})





var slideDown = {
  distance: '100%',
  origin: 'right',
 delay:400,
 interval:400,
 reset:false,
};

ScrollReveal().reveal('.people-itr', slideDown);




var slideLeft = {
  distance: '100%',
  origin: 'left',
 delay:400,
 reset:false,
 interval:600,
};

ScrollReveal().reveal('.Icon-with', slideLeft);
var slideBottom= {
  distance: '100%',
  origin: 'bottom',
 delay:400,
 interval:600,
 reset:false,
};

ScrollReveal().reveal('.lines-property li', slideBottom);