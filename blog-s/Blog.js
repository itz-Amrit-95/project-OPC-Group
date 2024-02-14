var slideUp = {
    distance: '60px',
    origin:'left',
    
    duration:2000,
    reset:false,
    delay:400,

};


ScrollReveal().reveal('.side-animate,.head-1,.fa-brands',slideUp,{delay: 300,origin:'left',});

var slideDown = {
    distance: '60px',
    origin:'right',
    
    duration:2000,
    reset:false,
    delay:400,

};
ScrollReveal().reveal('.button-animate',slideDown,{delay: 500,});