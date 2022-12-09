/* Barra de navegación */
const barra = document.querySelector('.header__nav__container');

window.addEventListener('scroll', function(){
    /* console.log('hiciste scroll'); */
    /* console.log(window.pageYOffset); */
    /* console.log(window.scrollY); */
    if (this.window.scrollY > 0){
        barra.classList.add('active');
    } else {
        barra.classList.remove('active');
    }
});

/* Menu hamburguesa */
const menu = document.querySelector('.header__nav__container__ul');
const boton = document.querySelector('.header__nav__container__boton');

boton.addEventListener('click', function(){
    /* console.log('hiciste click'); */
    menu.classList.toggle('activarMenu');
});

/* Carousel */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
