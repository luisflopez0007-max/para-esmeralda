function mostrarPantalla(id) {

    // Ocultar todas las pantallas
    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(pantalla => {
        pantalla.classList.remove("activa");
    });

    // Mostrar la pantalla seleccionada
    const pantallaSeleccionada = document.getElementById(id);

    pantallaSeleccionada.classList.add("activa");

    // Regresar automáticamente arriba
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}