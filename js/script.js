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

/* Cambiar a Día y Noche haciendo click */
let mezcla = "linear-gradient(to bottom, oscuro, tenue)";
let negro = 'black';
let oscuro = 'rgb(19, 19, 19)';
let tenue = 'rgb(49, 49, 49)';
let claro = 'rgb(253, 252, 250)';
let sillar = 'rgb(224, 216, 207)';

let button_1 = document.getElementById('dia');
let button_2 = document.getElementById('noche');

/* Día */
button_1.addEventListener('click', function(){

  /* agarrando elementos */
  let imagen = document.getElementById('img');


  let viajes = document.getElementById('viaje');
  let viajes2 = document.getElementById('viaje2');
  let viajes3 = document.getElementById('viaje3');
  let viajes4 = document.getElementById('viaje4');
  let targetaTitulo = document.querySelectorAll('.viaje__container__articulos__servicios--h4');
  let targetaParrafo = document.querySelectorAll('.viaje__container__articulos__servicios--p');
  let targetaTitulo2 = document.querySelectorAll('.viaje2__container__slider__articulos__servicios--h4');
  let targetaParrafo2 = document.querySelectorAll('.viaje2__container__slider__articulos__servicios--p');
  
  
  let cards = document.getElementById('paquetess');
  let shadow1 = document.querySelectorAll('.card__container__contInf__inf__front');
    let shadow2 = document.querySelectorAll('.card__container__contInf__inf__back');


  let footers = document.getElementById('footer');


  /* aplicando estilos */
  imagen.style.backgroundImage = "url('./img/Arequipa-dia.jpg')";


  viajes.style.background = claro;
  viajes.style.color = negro;
  viajes2.style.background = claro;
  viajes2.style.color = negro;
  viajes3.style.background = claro;
  viajes3.style.color = negro;
  viajes4.style.background = claro;
  viajes4.style.color = negro;
  for (const targ of targetaTitulo) {
    targ.style.color = "black";
  }
  for (const targs of targetaParrafo) {
    targs.style.color = "black";
  };
  for (const targe of targetaTitulo2) {
    targe.style.color = "black";
  }
  for (const targes of targetaParrafo2) {
    targes.style.color = "black";
  };


  cards.style.background = sillar;
  for (const shadow of shadow1) {
    shadow.style["boxShadow"] = "0 .5rem 1rem black";
  }
  for (const shadows of shadow2) {
    shadows.style["boxShadow"] = "0 .5rem 1rem black";
  };


  footers.style.background = claro;
  footers.style.color = negro;
});

/* Noche */
button_2.addEventListener('click', function(){

    /* agarrando elementos */
    let imagen = document.getElementById('img');

    
    let viajes = document.getElementById('viaje');
    let viajes2 = document.getElementById('viaje2');
    let viajes3 = document.getElementById('viaje3');
    let viajes4 = document.getElementById('viaje4');
    let targetaTitulo = document.querySelectorAll('.viaje__container__articulos__servicios--h4');
    let targetaParrafo = document.querySelectorAll('.viaje__container__articulos__servicios--p');
    let targetaTitulo2 = document.querySelectorAll('.viaje2__container__slider__articulos__servicios--h4');
    let targetaParrafo2 = document.querySelectorAll('.viaje2__container__slider__articulos__servicios--p');
    
    
    let cards = document.getElementById('paquetess');
    let cardsTit = document.getElementById('cardTi');
    let shadow1 = document.querySelectorAll('.card__container__contInf__inf__front');
    let shadow2 = document.querySelectorAll('.card__container__contInf__inf__back');


    let footers = document.getElementById('footer');


    /* aplicando estilos */
    imagen.style.backgroundImage = "url('./img/Arequipa.jpg')";


    viajes.style.background = tenue;
    viajes.style.color = claro;
    viajes2.style.background = tenue;
    viajes2.style.color = claro;
    viajes3.style.background = tenue;
    viajes3.style.color = claro;
    viajes4.style.background = tenue;
    viajes4.style.color = claro;
    for (const targ of targetaTitulo) {
      targ.style.color = "black";
    }
    for (const targs of targetaParrafo) {
      targs.style.color = "black";
    };
    for (const targe of targetaTitulo2) {
      targe.style.color = "black";
    }
    for (const targes of targetaParrafo2) {
      targes.style.color = "black";
    };


    cards.style.background = oscuro;
    cardsTit.style.color = claro;
    for (const shadow of shadow1) {
      shadow.style["boxShadow"] = "0 .5rem 1rem rgb(253, 252, 250)";
    }
    for (const shadows of shadow2) {
      shadows.style["boxShadow"] = "0 .5rem 1rem rgb(253, 252, 250)";
    };


    footers.style.background = tenue;
    footers.style.color = claro;
});