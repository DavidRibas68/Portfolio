// Inicialización de Animaciones AOS
AOS.init({
    once: true,
    offset: 0,
    duration: 800
});

// Refrescar AOS cuando cargue la página
window.addEventListener('load', function () {
    AOS.refresh();
});

// Funciones para los Pop-ups (Modales)
function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.style.display = "block";
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
    document.body.style.overflow = "hidden"; // Bloquea el scroll de fondo
}

function cerrarModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
    document.body.style.overflow = "auto"; // Libera el scroll
}

function cerrarSiClickFuera(evento, idModal) {
    const modal = document.getElementById(idModal);
    if (evento.target === modal) {
        cerrarModal(idModal);
    }
}