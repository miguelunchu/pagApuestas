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

    // Función helper para crear el efecto shake
    function shakeElement(element) {
        const positions = [5, -5, 5, -5, 2, -2, 0]; // Posiciones de la animación
        let i = 0;
        
        const interval = setInterval(() => {
            if (i >= positions.length) {
                clearInterval(interval);
                return;
            }
            element.style.transform = `translateX(${positions[i]}px)`;
            i++;
        }, 80); // Velocidad de la animación
    }

    // Validación para el formulario de inicio de sesión
    const loginForm = document.querySelector('.login-container form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = this.querySelectorAll('input');
            const loginButton = this.querySelector('.login-button');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                }
            });

            if (!isValid) {
                shakeElement(loginButton);
            } else {
                this.submit();
            }
        });
    }

    // Validación para el formulario de registro
    const registerButton = document.querySelector('.btn-register');
    if (registerButton) {
        registerButton.addEventListener('click', function(e) {
            e.preventDefault();
            const inputs = document.querySelectorAll('.block input');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                }
            });

            if (!isValid) {
                shakeElement(this);
            } else {
                document.querySelector('form').submit();
            }
        });
    }

    // Activar animaciones de entrada
    const contenido = document.querySelector('.contenido');
    const desafios = document.querySelector('.desafios');
    
    if (contenido) {
        setTimeout(() => {
            contenido.classList.add('loaded');
        }, 100);
    }

    if (desafios) {
        setTimeout(() => {
            desafios.classList.add('loaded');
        }, 300);
    }
}); 