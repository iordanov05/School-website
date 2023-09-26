const openMenuBtn = document.querySelector(`.page-header__open-btn`);
const menu = document.querySelector(`.page-header__nav`);
const closeMenuBtn = menu.querySelector(`.page-header__close-btn`);
const openAboutMenuBtn = document.querySelector(`.page-header__open-btn--about`);
const aboutMenu = document.querySelector(`.page-header__about-menu-wrapper`);
const closeAboutMenuBtn = menu.querySelector(`.page-header__close-btn--about`);

const onCloseMenuBtnClick = function (evt) {
  evt.preventDefault();
  if (!menu.classList.contains(`hide`)) {
    
    menu.classList.add(`hide`);

    aboutMenu.classList.add(`hide`);
    openMenuBtn.classList.remove('hide')
  }

  closeMenuBtn.removeEventListener(`click`, onCloseMenuBtnClick);
}

const onOpenMenuBtnClick = function (evt) {
  evt.preventDefault();

  if (menu.classList.contains(`hide`)) {
    menu.classList.remove(`hide`);
    aboutMenu.classList.remove(`hide`);
    openMenuBtn.classList.add('hide');
  }

  closeMenuBtn.addEventListener(`click`, onCloseMenuBtnClick);
};

const onCloseAboutMenuBtnClick = function (evt) {
  evt.preventDefault();
  if (!aboutMenu.classList.contains(`hide`)) {
    $(document).scroll(function() {

      var scrollTop = $(window).scrollTop();
           console.log(scrollTop);
            if (scrollTop >= 100) {
                $('#menu').css({'background-color': "black"
          });
            }
            else{
                $('#menu').css({
          'background-color': "transparent"
          });
            }
    });
    aboutMenu.classList.add(`hide`);
    aboutMenu.classList.add(`hide`);
    openAboutMenuBtn.classList.remove('hide')
  }

  closeAboutMenuBtn.removeEventListener(`click`, onCloseMenuBtnClick);
};

const onOpenAboutMenuBtnClick = function (evt) {
  evt.preventDefault();

  if (aboutMenu.classList.contains(`hide`)) {
    aboutMenu.classList.remove(`hide`);
    openAboutMenuBtn.classList.add('hide');
  }

  closeAboutMenuBtn.addEventListener(`click`, onCloseAboutMenuBtnClick);
}

openMenuBtn.addEventListener(`click`, onOpenMenuBtnClick);
openAboutMenuBtn.addEventListener(`click`, onOpenAboutMenuBtnClick);
window.addEventListener(`resize`, onCloseMenuBtnClick);

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
/* Индекс слайда по умолчанию */
var slideIndex1 = 1;
showSlides1(slideIndex1);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide1() {
    showSlides1(slideIndex1 += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide1() {
    showSlides1(slideIndex1 -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

/* Основная функция слайдера */
function showSlides1(n) {
    var i;
    var slides1 = document.getElementsByClassName("item1");
    var dots1 = document.getElementsByClassName("slider-dots_item1");
    if (n > slides1.length) {
      slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = slides1.length
    }
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active", "");
    }
    slides1[slideIndex1 - 1].style.display = "block";
    dots1[slideIndex1 - 1].className += " active";
}


// $(document).scroll(function() {

//   var scrollTop = $(window).scrollTop();
//        console.log(scrollTop);
//         if (scrollTop >= 100) {
//             $('#menu').css({'background-color': "black"
//       });
//         }
//         else{
//             $('#menu').css({
//       'background-color': "transparent"
//       });
//         }
// });


// js :
// $(window).resize(function() {
//     if ( $(window).width() > 780) {
  
//  $(document).scroll(function() {
  
//   var scrollTop = $(window).scrollTop();
//        console.log(scrollTop);
//         if (scrollTop >= 100) {
//             $('#menu').css({'background-color': "black"
//       });
//         }
//         else{
//             $('#menu').css({
//       'background-color': "transparent"
//       });
//         }
// }); 
// }
// });