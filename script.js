
AOS.init({ once: true, offset: 0, duration: 800 });
window.addEventListener('load', function () { AOS.refresh(); });

// --- LÓGICA DE LOS POP-UPS (MODALES) ---

// Función para abrir
function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.style.display = "block"; // Lo hace visible
    // Pequeño retraso para que la animación de opacidad funcione suavemente
    setTimeout(() => { modal.classList.add("show"); }, 10);
    // Evita que la web de fondo siga haciendo scroll mientras miras el pop-up
    document.body.style.overflow = "hidden";
}

// Función para cerrar (con la X)
function cerrarModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.classList.remove("show"); // Quita la opacidad
    // Espera a que acabe la transición para ocultarlo del todo
    setTimeout(() => { modal.style.display = "none"; }, 300);
    // Devuelve el scroll a la página web normal
    document.body.style.overflow = "auto";
}

// Función para cerrar haciendo clic en el fondo negro
function cerrarSiClickFuera(evento, idModal) {
    const modal = document.getElementById(idModal);
    // Si donde he hecho clic es exactamente el fondo oscuro (y no la caja blanca interior)...
    if (evento.target === modal) {
        cerrarModal(idModal);
    }
}