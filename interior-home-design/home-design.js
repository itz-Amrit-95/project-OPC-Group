var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    // centeredSlides: true,
    spaceBetween: 4,
    loop:true,
    // direction: "horizontal",
    // mousewheel: true,
    // keyboard: {
    //     enabled: true,
    //   },
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
    //   type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      520:{
        slidesPerView:2,
      },
      950:{
        slidesPerView:3,
      }
    }
    
  });
  



 


  
  var slideUp = {
    reset:false,
    distance:'60px',
    duration:1500,
    origin: 'top',
    delay:500,
    
};
ScrollReveal().reveal('.box-head h1 span,.design-text,h2 span',slideUp,{delay:600,interval:200,});
var slideDown = {
  distance: '150%',
  origin: 'left',
  reset:false,
  duration:500,
  interval:700,
};

ScrollReveal().reveal('h1', slideDown);




 