  AOS.init({
    once: true,
    });

     var swiper2 = new Swiper(".twoPerson", {
          slidesPerView: 7,
          spaceBetween: 5,
          breakpoints: {
               320: {
                slidesPerView: 4,
                spaceBetween: 5,
               },
               380: {
                slidesPerView: 4.5,
                spaceBetween: 5,
               },
               430: {
                slidesPerView: 5,
                spaceBetween: 5,
               },
               490: {
                slidesPerView: 6,
                spaceBetween: 5,
               },
               576: {
                slidesPerView: 5,
                spaceBetween: 5,
               },
             991: {
               slidesPerView: 6,
               spaceBetween: 5,
              },
             1399: {
                slidesPerView: 7,
                spaceBetween: 5,
               },
            },
          });

          var swiper1 = new Swiper(".mainPerson", {
               touchRatio: 0,
               slidesPerView: 1.5,
               spaceBetween: 20,
               autoplay: {
                   delay: 5000,
                   stopOnLastSlide: true,
                 },
               thumbs: {
               swiper: swiper2,
             },
             navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
             },
             breakpoints: {
              320: {
                 slidesPerView: 1,
                 spaceBetween: 20,
                },
              1190: {
                 slidesPerView: 1.5,
                 spaceBetween: 20,
                 },
             },
               });

     var swiper3 = new Swiper(".mainText", {
          touchRatio: 0,
          slidesPerView: 1,
          spaceBetween: 20,
          pagination: {
                   el: ".swiper-pagination",
                   type: "fraction",
                   formatFractionCurrent: addZero,
                   formatFractionTotal: addZero,
                 },
                 breakpoints: {
                  320: {
                     slidesPerView: 1,
                     spaceBetween: 40,
                    },
                  767: {
                       slidesPerView: 1,
                      spaceBetween: 20,
                     },
                 },
          });

swiper1.controller.control = swiper3;
swiper3.controller.control = swiper1;

var swiper4 = new Swiper(".infoSwiper10", {
     slidesPerView: 'auto',
     spaceBetween: 10,
     pagination: {
       el: ".swiper-pagination",
       type: "fraction",
       formatFractionCurrent: addZero,
       formatFractionTotal: addZero,
     },
     navigation: {
       nextEl: ".swiper-button-nt",
       prevEl: ".swiper-button-pv",
     },
     scrollbar: {
         el: ".swiper-scrollbar",
         hide: false,
       },
       breakpoints: {
          320: {
                   touchRatio: 1,
                   slidesPerColumn: 2,
                   slidesPerView: 1,
                   spaceBetween: 20,
            },
          431: {
                   slidesPerColumn: 2,
                   slidesPerView: 1.8,
                   spaceBetween: 20,
            },
          520:{
                   slidesPerColumn: 2,
                   slidesPerView: 2,
                   spaceBetween: 20,
            },
         576:{
                  touchRatio: 0,
                  slidesPerView: 2,
                  spaceBetween: 10,
           },
       767:{
               slidesPerView: 2.7,
               spaceBetween: 10,
        },
       991:{
             slidesPerView: 3,
             spaceBetween: 10,
      },
      1200:{
         slidesPerView: 3.5,
         spaceBetween: 10,
      },
      1400: {
         slidesPerView: 4,
         spaceBetween: 0,
      },
   }
     });


     var swiper6 = new Swiper(".infoSwiper2", {
          slidesPerView: 'auto',
          spaceBetween: 10,
          pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            formatFractionCurrent: addZero,
            formatFractionTotal: addZero,
          },
          navigation: {
            nextEl: ".swiper-button-nt",
            prevEl: ".swiper-button-pv",
          },
          scrollbar: {
              el: ".swiper-scrollbar",
              hide: false,
            },
            breakpoints: {
               320: {
                        touchRatio: 1,
                        slidesPerColumn: 2,
                        slidesPerView: 1,
                        spaceBetween: 20,
                 },
               431: {
                        slidesPerColumn: 2,
                        slidesPerView: 1.8,
                        spaceBetween: 20,
                 },
               520:{
                        slidesPerColumn: 2,
                        slidesPerView: 2,
                        spaceBetween: 20,
                 },
              576:{
                       touchRatio: 0,
                       slidesPerView: 2,
                       spaceBetween: 10,
                },
            767:{
                    slidesPerView: 2.7,
                    spaceBetween: 10,
             },
            991:{
                  slidesPerView: 3,
                  spaceBetween: 10,
           },
           1200:{
              slidesPerView: 3.5,
              spaceBetween: 10,
           },
           1400: {
              slidesPerView: 4,
              spaceBetween: 0,
           },
        }
          });

          var swiper7 = new Swiper(".infoSwiper3", {
               slidesPerView: 'auto',
               spaceBetween: 10,
               pagination: {
                 el: ".swiper-pagination",
                 type: "fraction",
                 formatFractionCurrent: addZero,
                 formatFractionTotal: addZero,
               },
               navigation: {
                 nextEl: ".swiper-button-nt",
                 prevEl: ".swiper-button-pv",
               },
               scrollbar: {
                   el: ".swiper-scrollbar",
                   hide: false,
                 },
                 breakpoints: {
                    320: {
                             touchRatio: 1,
                             slidesPerColumn: 2,
                             slidesPerView: 1,
                             spaceBetween: 20,
                      },
                    431: {
                             slidesPerColumn: 2,
                             slidesPerView: 1.8,
                             spaceBetween: 20,
                      },
                    520:{
                             slidesPerColumn: 2,
                             slidesPerView: 2,
                             spaceBetween: 20,
                      },
                   576:{
                            touchRatio: 0,
                            slidesPerView: 2,
                            spaceBetween: 10,
                     },
                 767:{
                         slidesPerView: 2.7,
                         spaceBetween: 10,
                  },
                 991:{
                       slidesPerView: 3,
                       spaceBetween: 10,
                },
                1200:{
                   slidesPerView: 3.5,
                   spaceBetween: 10,
                },
                1400: {
                   slidesPerView: 4,
                   spaceBetween: 0,
                },
             }
               });

               var swiper8 = new Swiper(".infoSwiper4", {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    pagination: {
                      el: ".swiper-pagination",
                      type: "fraction",
                      formatFractionCurrent: addZero,
                      formatFractionTotal: addZero,
                    },
                    navigation: {
                      nextEl: ".swiper-button-nt",
                      prevEl: ".swiper-button-pv",
                    },
                    scrollbar: {
                        el: ".swiper-scrollbar",
                        hide: false,
                      },
                      breakpoints: {
                         320: {
                                  touchRatio: 1,
                                  slidesPerColumn: 2,
                                  slidesPerView: 1,
                                  spaceBetween: 20,
                           },
                         431: {
                                  slidesPerColumn: 2,
                                  slidesPerView: 1.8,
                                  spaceBetween: 20,
                           },
                         520:{
                                  slidesPerColumn: 2,
                                  slidesPerView: 2,
                                  spaceBetween: 20,
                           },
                        576:{
                                 touchRatio: 0,
                                 slidesPerView: 2,
                                 spaceBetween: 10,
                          },
                      767:{
                              slidesPerView: 2.7,
                              spaceBetween: 10,
                       },
                      991:{
                            slidesPerView: 3,
                            spaceBetween: 10,
                     },
                     1200:{
                        slidesPerView: 3.5,
                        spaceBetween: 10,
                     },
                     1400: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                     },
                  }
                    });

                    var swiper9 = new Swiper(".infoSwiper5", {
                         slidesPerView: 'auto',
                         spaceBetween: 10,
                         pagination: {
                           el: ".swiper-pagination",
                           type: "fraction",
                           formatFractionCurrent: addZero,
                           formatFractionTotal: addZero,
                         },
                         navigation: {
                           nextEl: ".swiper-button-nt",
                           prevEl: ".swiper-button-pv",
                         },
                         scrollbar: {
                             el: ".swiper-scrollbar",
                             hide: false,
                           },
                           breakpoints: {
                              320: {
                                       touchRatio: 1,
                                       slidesPerColumn: 2,
                                       slidesPerView: 1,
                                       spaceBetween: 20,
                                },
                              431: {
                                       slidesPerColumn: 2,
                                       slidesPerView: 1.8,
                                       spaceBetween: 20,
                                },
                              520:{
                                       slidesPerColumn: 2,
                                       slidesPerView: 2,
                                       spaceBetween: 20,
                                },
                             576:{
                                      touchRatio: 0,
                                      slidesPerView: 2,
                                      spaceBetween: 10,
                               },
                           767:{
                                   slidesPerView: 2.7,
                                   spaceBetween: 10,
                            },
                           991:{
                                 slidesPerView: 3,
                                 spaceBetween: 10,
                          },
                          1200:{
                             slidesPerView: 3.5,
                             spaceBetween: 10,
                          },
                          1400: {
                             slidesPerView: 4,
                             spaceBetween: 0,
                          },
                       }
                         });



     function addZero(num){
      return (num > 9) ? num : '0' + num;
    }




    // включение popap видео

    var clickStartVideo = document.querySelector('.about .video__img'),
     imgVideo = document.querySelector('.about .video'),
      startMainVideo = document.querySelector('.popap__video .video__play'),
      popapPlayVideo = document.querySelector('.popap__video');
      clickStartVideo.onclick = function(){
      popapPlayVideo.classList.toggle('active');
      popapPlayVideo.classList.toggle('hide');
      startMainVideo.src = startMainVideo.src + '?autoplay=1';
      showMainBlock.style.display = 'block';
    }

    // закртие popap видео на крест

      var clickVideoCrest = document.querySelector('.popap__video .video__close');
         clickVideoCrest.onclick = function(){
        popapPlayVideo.classList.toggle('active');
         popapPlayVideo.classList.toggle('hide');
         startMainVideo.src = 'https://www.youtube.com/embed/y9YHERcs95g';
         showMainBlock.style.display = 'none';
    }


    // обновление слайдера

    let sl1 = document.querySelectorAll('elem1, .elem2, .elem3, .elem4, .elem5');
    sl1.forEach((item, i) => {
    item.addEventListener('click', () => {
    swiper6.slideTo(-999);
    swiper7.slideTo(-999);
    swiper8.slideTo(-999);
    swiper9.slideTo(-999);
    swiper4.slideTo(-999);
    swiper6.update(true);
    swiper7.update(true);
    swiper8.update(true);
    swiper9.update(true);
    });
    });


    // смена слайдера

    var med = document.getElementById('med'),
    car = document.getElementById('car'),
    biz = document.getElementById('infobiz'),
    fin = document.getElementById('finanse'),
    dif = document.getElementById('diferent');

    med.style.display = 'block';
    car.style.display = 'none';
    biz.style.display = 'none';
    fin.style.display = 'none';
    dif.style.display = 'none';
    var swipeMain = document.querySelectorAll('.cases .swipeKatone');
    function searchSwipe(){
          for (var i = 0; i < swipeMain.length; i++) {
               swipeMain[i].style.display = 'none';
          }
    }

    function look(elemId) {
    var elem = document.getElementById(elemId);
    if (elem.style.display == "none") {
         searchSwipe();
         elem.style.display = "block";
    } else {
        return false;
    }
};


// cмена цвета
   var ulColors = document.querySelectorAll('.cases .cases__elem');
function switchsColor(nameelem){
     for (var i = 0; i < ulColors.length; i++) {
         ulColors[i].style.color = '#262830';
     }
     nameelem.style.color = '#219653';
}

var katElem1 = document.querySelector('.cases .elem1'),
katElem2 = document.querySelector('.cases .elem2'),
katElem3 = document.querySelector('.cases .elem3'),
katElem4 = document.querySelector('.cases .elem4'),
katElem5 = document.querySelector('.cases .elem5');

katElem1.style.color = '#219653';

katElem1.onclick = function(){
     switchsColor(katElem1);
}
katElem2.onclick = function(){
     switchsColor(katElem2);
}
katElem3.onclick = function(){
     switchsColor(katElem3);
}
katElem4.onclick = function(){
     switchsColor(katElem4);
}
katElem5.onclick = function(){
     switchsColor(katElem5);
}







// появление блока
var showMainBlock = document.querySelector('.background-full');


  // выбор в форме
 var mainBody = document.querySelector('.html');


  var clickbuttonForm = document.querySelector('.torun .torun__button'),
  clickbuttonForm2 = document.querySelector('.about .button-white'),
  clickbuttonForm3 = document.querySelector('.calculate .calculate__cost'),
  clickbuttonForm4 = document.querySelector('.build .build__cost'),
  clickbuttonForm5 = document.querySelector('.header .header__start'),
  showForm = document.querySelector('.form-block'),
  closeForm = document.querySelector('.form-block .form__krest');

// функция открытия, закрытия

function open(name){
     name.classList.toggle('hide');
     name.classList.toggle('active');
     showMainBlock.style.display = 'block';
};

function close(name){
     name.classList.toggle('active');
     name.classList.toggle('hide');
     showMainBlock.style.display = 'none';
};

// закрытие на фон формы

hideCases = document.querySelectorAll('.popap');
showMainBlock.onclick = function(){
showForm.classList.add('hide');
showForm.classList.remove('active');
for (var i = 0; i < hideCases.length; i++) {
     hideCases[i].classList.add('hide');
     hideCases[i].classList.remove('active');
};
politikMenu.classList.add('hide');
politikMenu.classList.remove('active');

popapPlayVideo.classList.add('hide');
popapPlayVideo.classList.remove('active');
startMainVideo.src = 'https://www.youtube.com/embed/y9YHERcs95g'

showMainBlock.style.display = 'none';
};

// открытие на кнопки формы

 clickbuttonForm.onclick = function(){
   open(showForm);
};

 clickbuttonForm2.onclick = function(){
 open(showForm);
};

clickbuttonForm3.onclick = function(){
open(showForm);
};

clickbuttonForm4.onclick = function(){
open(showForm);
};

clickbuttonForm5.onclick = function(){
open(showForm);
};

// закрытии на крест формы

closeForm.onclick = function(){
close(showForm);
};



// открытие своего кейса
function openCases(elementsid){
var cases = document.getElementById(elementsid);
cases.classList.toggle('active');
cases.classList.toggle('hide');
showMainBlock.style.display = 'block';
cases.scrollIntoView();
}


// закрытие кейса на крест
var closeCaseClick = document.querySelector('.popap .popap__close'),
hideCase = document.querySelector('.popap');
hideCases = document.querySelectorAll('.popap');

closeCaseClick.onclick = function(){
     hideCase.classList.toggle('active');
     hideCase.classList.toggle('hide');
     showMainBlock.style.display = 'none';
}


function closeCases(elementsid){
var clcases = document.getElementById(elementsid);
clcases.classList.toggle('active');
clcases.classList.toggle('hide');
showMainBlock.style.display = 'none';
}


// политика
var politikMenu = document.querySelector('.privacy'),
     openPolitikMenu = document.querySelector('.footer .footer__privacy'),
     closePolitikMenu = document.querySelector('.privacy .privacy__close');

openPolitikMenu.onclick = function(){
 open(politikMenu);
     };

     closePolitikMenu.onclick = function(){
     close(politikMenu);
     };


// закрытие на esc формы
     $(document).on('keydown', function(e) {
       if (e.keyCode === 27) {
         politikMenu.classList.remove('active');
         politikMenu.classList.add('hide');
         for (var i = 0; i < hideCases.length; i++) {
              hideCases[i].classList.remove('active');
               hideCases[i].classList.add('hide');
         }
         showForm.classList.remove('active');
         showForm.classList.add('hide');
         popapPlayVideo.classList.add('hide');
         popapPlayVideo.classList.remove('active');
         startMainVideo.src = 'https://www.youtube.com/embed/y9YHERcs95g'
         showMainBlock.style.display = 'none';
         }
     });



// скролл до формы

$("#torunbutton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#form").offset().top
   }, 1000);
});

$("#buttonwhite").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#form").offset().top
   }, 1000);
});

$("#cost1").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#form").offset().top
   }, 1000);
});

$("#cost2").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#form").offset().top
   }, 1000);
});

$("#cost3").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#form").offset().top
   }, 1000);
});



$("#return").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#header").offset().top
   }, 1000);
});


// изменение placeholder



var ulPhone = document.querySelectorAll('.form .form__society');
var numberPhone = document.getElementById('numbers-phone'),
numberTelegram = document.getElementById('numbers-telegram'),
numberWhatsapp = document.getElementById('numbers-whatsapp');

numberPhone.style.background = 'green';
numberPhone.style.borderRadius = '50%';

numberPhone.onclick = function(){
     for (var i = 0; i < ulPhone.length; i++) {
          ulPhone[i].style.background = 'none';
          ulPhone[i].style.borderRadius = '0%';
     }
     numberPhone.style.background = 'green';
     numberPhone.style.borderRadius = '50%';
     document.getElementsByName("phone")[0].value="";
     document.getElementsByName("phone")[0].placeholder="Номер телефона";
}

numberTelegram.onclick = function(){
     for (var i = 0; i < ulPhone.length; i++) {
          ulPhone[i].style.background = 'none';
          ulPhone[i].style.borderRadius = '0%';
     }
     numberTelegram.style.background = 'green';
     numberTelegram.style.borderRadius = '50%';
     document.getElementsByName("phone")[0].value="";
     document.getElementsByName("phone")[0].placeholder="Номер в телеграмме";
}

numberWhatsapp.onclick = function(){
     for (var i = 0; i < ulPhone.length; i++) {
          ulPhone[i].style.background = 'none';
          ulPhone[i].style.borderRadius = '0%';
     }
     numberWhatsapp.style.background = 'green';
     numberWhatsapp.style.borderRadius = '50%';
     document.getElementsByName("phone")[0].value="";
     document.getElementsByName("phone")[0].placeholder="Номер в ватсапе";
}


// accept для формы
var es = document.querySelector('.form .form__mark');
es.onclick = function(){
     es.classList.toggle('whitez');
     es.classList.toggle('greenz');
}


// slide cases
var lls1 = document.querySelector('.lls1');
lls1.onclick = function(){

}

// удачи!
