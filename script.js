// Requisito C: Funcionalidad de botón visible
const boton = document.getElementById('btnIrArriba');

// Mostrar el botón cuando el usuario baja en la página
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
};

// Acción de volver arriba al presionar
boton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});