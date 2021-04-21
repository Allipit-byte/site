AOS.init();
var mainWindow = document.querySelector('body');
// бургер меню

var clickShowBurgerMenu = document.querySelector('.smalldh__link');
var showSmallBurgerMenu = document.querySelector('.header .smallhd__menu');
var clickHideBurgerMenu = document.querySelector('.header .smallhd__menu .smalldh__link');
clickShowBurgerMenu.onclick = function(e){
  e.preventDefault();
  showSmallBurgerMenu.classList.toggle('smallhd__hide');
  showSmallBurgerMenu.classList.toggle('.smallhd__show');
  mainWindow.classList.toggle('body__overflow');
}

clickHideBurgerMenu.onclick = function(e){
  e.preventDefault();
  showSmallBurgerMenu.classList.toggle('smallhd__hide');
  showSmallBurgerMenu.classList.toggle('.smallhd__show');
  mainWindow.classList.toggle('body__overflow');
}



//  other menu

var showMenu = document.querySelector('.window'),
  clickListMenu = document.querySelector('.header .header__other');

clickListMenu.onclick = function OtherMenu(e){
  e.preventDefault();
  showMenu.classList.toggle('window__hide');
  showMenu.classList.toggle('window__show');
  mainWindow.classList.toggle('body__overflow');
}
var switchIconOtherMenu = document.querySelector('.header .header__other .other__img');
switchIconOtherMenu.onclick = function(){
if (switchIconOtherMenu.src == 'http://localhost:3000/img/other-icon.svg'){
    switchIconOtherMenu.src = '../img/close-icon.svg';
}else {
  switchIconOtherMenu.src = '../img/other-icon.svg';
}
}

// при нажатие в бургер меню
var s1d1 = document.querySelector('.header .other1');
s1d1.onclick = function(e){
    e.preventDefault();
    showMenu.classList.toggle('window__hide');
    showMenu.classList.toggle('window__show');
    mainWindow.classList.toggle('body__overflow');
}

// при нажатие на крест
var clickCrestOtherMenu = document.querySelector('.header__other .other__img');
clickCrestOtherMenu.onclick = function(e){
  e.preventDefault();
  showMenu.classList.toggle('window__hide');
  showMenu.classList.toggle('window__show');
  mainWindow.classList.toggle('body__overflow');
  switchIconOtherMenu.src = '../img/other-icon.svg';
}

// search menu


var getInputValue = document.querySelector('.header .header__input .input__search');
var showSearchMenu = document.querySelector('.search-menu');
var showSearchText = document.querySelector('.search-menu .search__main');
var showinputImg1 = document.querySelector('.header .header__input .input__img');
var showinputImg2 = document.querySelector('.header .header__input .input__img2');
getInputValue.oninput = function(e){
  var target = e.target;
    getInputValue.style.opacity = '1';
    showinputImg1.style.display = 'none';
    showinputImg2.style.display = 'block';
    showSearchMenu.style.display = 'block';
    showSearchMenu.classList.add('b-show');
    getInputValue.classList.add('ml1');
    if (getInputValue.value == 'UX') {
      showSearchText.style.display = 'block';
      showSearchText.classList.add('b-show_text');
    } else {
      return false;
    }
}

getInputValue.onblur = function(e){
  var target = e.target;
  if (target == showSearchMenu) {
    console.log('asasas');
  } else{
    getInputValue.classList.remove('ml1');
    getInputValue.style.opacity = '0.5';
    showinputImg1.style.display = 'block';
    showinputImg2.style.display = 'none';
      showSearchMenu.style.display = 'none';
      showSearchMenu.classList.remove('b-show');
  }
}
