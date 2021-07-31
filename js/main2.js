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
     document.getElementsByName("phone")[0].placeholder="Phone number";
}

numberTelegram.onclick = function(){
     for (var i = 0; i < ulPhone.length; i++) {
          ulPhone[i].style.background = 'none';
          ulPhone[i].style.borderRadius = '0%';
     }
     numberTelegram.style.background = 'green';
     numberTelegram.style.borderRadius = '50%';
     document.getElementsByName("phone")[0].value="";
     document.getElementsByName("phone")[0].placeholder="Phone telegram";
}

numberWhatsapp.onclick = function(){
     for (var i = 0; i < ulPhone.length; i++) {
          ulPhone[i].style.background = 'none';
          ulPhone[i].style.borderRadius = '0%';
     }
     numberWhatsapp.style.background = 'green';
     numberWhatsapp.style.borderRadius = '50%';
     document.getElementsByName("phone")[0].value="";
     document.getElementsByName("phone")[0].placeholder="Phone whatsapp";
}



// закрытие видео на фон
showMainBlock.onclick = function(){
popapPlayVideo.classList.add('hide');
popapPlayVideo.classList.remove('active');
startMainVideo.src = 'https://www.youtube.com/embed/SzZobFyKGPg'
showMainBlock.style.display = 'none';
};

// закрытие видео на крест

      var clickVideoCrest = document.querySelector('.popap__video .video__close');
         clickVideoCrest.onclick = function(){
        popapPlayVideo.classList.toggle('active');
         popapPlayVideo.classList.toggle('hide');
         startMainVideo.src = 'https://www.youtube.com/embed/SzZobFyKGPg';
         showMainBlock.style.display = 'none';
    }
