
  $(function () {
    $(".estimation__block").twentytwenty({
      no_overlay: true,
      move_slider_on_hover: true,
      
    });
  });



var swiper1 = new Swiper(".mySwiper", {
       pagination: {
         el: ".swiper-pagination",
         type: "fraction",
       },
       navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
     });


     var swiper2 = new Swiper(".swiper_number", {
          touchRatio: 0,
          });

swiper1.controller.control = swiper2;


var swiper3 = new Swiper(".mySwiper2", {
       navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
     });



     var swiper4 = new Swiper(".reportSwiper", {
         slidesPerView: 2.5,
        spaceBetween: 20,

        breakpoints: {

           320: {
             slidesPerView: 1,
             spaceBetween: 20,
          },
           1135: {
             slidesPerView: 1.5,
          },
           1520: {
              slidesPerView: 2,
           },
           1900: {
              slidesPerView: 2.5,
           },
        },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
   el: '.swiper-pagination',
   type: 'bullets',
 },
    });



    var swiper5 = new Swiper(".mySwiper4", {
      spaceBetween: 10,
      slidesPerView: 8,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
         1200: {
            slidesPerView: 6,
            spaceBetween: 15,
         },
         992: {
            slidesPerView: 4,
            spaceBetween: 20,
         },
         570: {
            slidesPerView: 3,
            spaceBetween: 15,
         },
      }
     });
     var swiper6 = new Swiper(".mySwiper5", {
      spaceBetween: 10,
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      thumbs: {
         swiper: swiper5,
      },
     });


var clickMenu = document.querySelector('.cost .cost__nav .nav__right');
var activeMenu = document.querySelector('.cost .cost__nav');

     clickMenu.onclick = function(){
       activeMenu.classList.toggle('nav_close');
       activeMenu.classList.toggle('nav_open');
     }
