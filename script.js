document.addEventListener("DOMContentLoaded", function() {
    // Código para los botones de inicio de sesión y registro
    const iniciarSesionBtn = document.querySelector('.iniciar-sesion');
    const registrarseBtn = document.querySelector('.registrarse');

    if (iniciarSesionBtn) {
        iniciarSesionBtn.addEventListener('click', () => {
            window.location.href = './iniciar-sesion.html';
        });
    }

    if (registrarseBtn) {
        registrarseBtn.addEventListener('click', () => {
            window.location.href = './registrarse.html';
        });
    }

    // Código para el menú hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLateral = document.querySelector('.menu-lateral');

    if (menuToggle && menuLateral) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuLateral.classList.toggle('active');
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!menuLateral.contains(e.target) && !menuToggle.contains(e.target)) {
                menuLateral.classList.remove('active');
            }
        });
    }

    // Código para el perfil de usuario
    const perfilUsuario = document.querySelector(".perfil-usuario");
    if (perfilUsuario) {
        perfilUsuario.addEventListener("click", function() {
            window.location.href = "miperfil.html";
        });
    }
}); 