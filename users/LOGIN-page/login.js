
let inp=document.querySelector("input");

inp.addEventListener("input",()=>{
  inp.setCustomValidity();
  inp.checkValidity();
  
})
inp.addEventListener("invalid",()=>{
  if(inp.value === ""){
    inp.setCustomValidity("please enter your Email-Id")
  }else{
    inp.setCustomValidity("")
  }
})






















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