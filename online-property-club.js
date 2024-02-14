



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    fade:true,
    loop:true,
    grabCursor:true,

    autoplay: { delay: 2000, disableOnInteraction: true,  },
    
    spaceBetween: 12,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      dynamicBullets:true
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



  var swiper = new Swiper("#swiper-1", {
    slidesPerView: 3,
    fade:true,
    loop:false,
    grabCursor:true,
    // autoplay: { delay: 3000, disableOnInteraction: true,  },
    spaceBetween: 12,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      dynamicBullets:true
    },
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      520:{
        slidesPerView:1,
      },
      950:{
        slidesPerView:3,
      }
    }
    
  });




  var swiper = new Swiper("#mySwiper3", {
    slidesPerView: 1,
    // centeredSlides: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      
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


var slideleft = {
    distance: '150%',
    origin: 'left',
    reset: false,
    duration: 900,
    interval: 700,
};

ScrollReveal().reveal('.mySwiper', slideleft);

var slideRight = {
  distance: '150%',
  origin: 'right',
  reset: false,
  duration: 900,
  interval: 800,
};

ScrollReveal().reveal('.reveal-swiper', slideRight);



var slideLeft1 = {
  distance: '150%',
  origin: 'left',
  reset: false,
  duration: 900,
  interval: 400,
};

ScrollReveal().reveal('.mySwiper3', slideLeft1);



var slideRight1 = {
  distance: '150%',
  origin: 'left',
  reset: false,
  duration: 900,
  interval: 400,
};

ScrollReveal().reveal('.img-effect', slideRight1);





















