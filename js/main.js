AOS.init();

var clickBurger = document.querySelector('.header .menu__link'),
    showBurgerMenu = document.querySelector('.menu'),
    clickCloseBurger = document.querySelector('.menu .menu__close');

clickBurger.onclick = function(){
  clickBurger.classList.toggle('menu__link_active');
  showBurgerMenu.classList.toggle('menu__hide');
  showBurgerMenu.classList.toggle('menu__show');
}

clickCloseBurger.onclick = function(){
  showBurgerMenu.classList.toggle('menu__hide');
  showBurgerMenu.classList.toggle('menu__show');
  clickBurger.classList.toggle('menu__link_active');
}

var clickElemBurger = document.querySelector('.menu .menu__line');

clickElemBurger.onclick = function(){
  showBurgerMenu.classList.toggle('menu__hide');
  showBurgerMenu.classList.toggle('menu__show');
  clickBurger.classList.toggle('menu__link_active');
}
