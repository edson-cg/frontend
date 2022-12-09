/* Barra de navegación */
const barra = document.querySelector('.headerpack__nav');

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

/* Menu hamburguesa en paquetes */
const menus = document.querySelector('.headerpack__nav__ul');
const botones = document.querySelector('.headerpack__nav__boton');

botones.addEventListener('click', function(){
    console.log('hiciste click');
    menus.classList.toggle('activarMenus');
});