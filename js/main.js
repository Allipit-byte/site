AOS.init();

var clickBurger = document.querySelector('.header .menu__link'),
    showBurgerMenu = document.querySelector('.menus'),
    clickCloseBurger = document.querySelector('.menus .menu__close'),
    mainbody = document.querySelector('body');

clickBurger.onclick = function(){
  clickBurger.classList.toggle('menu__link_active');
  showBurgerMenu.classList.toggle('menu__hide');
  mainbody.classList.toggle('no-scroll');
  showBurgerMenu.classList.toggle('menu__show');
}

clickCloseBurger.onclick = function(){
  showBurgerMenu.classList.toggle('menu__hide');
  showBurgerMenu.classList.toggle('menu__show');
  clickBurger.classList.toggle('menu__link_active');
  mainbody.classList.toggle('no-scroll');
}

var clickElemBurger = document.querySelector('.menus .header__menu');

clickElemBurger.onclick = function(){
  showBurgerMenu.classList.toggle('menu__hide');
  showBurgerMenu.classList.toggle('menu__show');
  mainbody.classList.toggle('no-scroll');
  clickBurger.classList.toggle('menu__link_active');
}
