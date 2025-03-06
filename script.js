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

    // AI Assistant - Solo manejo de la interfaz
    const aiToggle = document.querySelector('.ai-toggle');
    const aiContainer = document.querySelector('.ai-chat-container');
    const aiClose = document.querySelector('.ai-close');
    const aiInput = document.querySelector('.ai-chat-input input');
    const aiSend = document.querySelector('.ai-send');
    const aiMic = document.querySelector('.ai-mic');

    if (aiToggle && aiContainer && aiClose) {
        // Abrir chat
        aiToggle.addEventListener('click', () => {
            aiContainer.classList.add('active');
        });

        // Cerrar chat
        aiClose.addEventListener('click', () => {
            aiContainer.classList.remove('active');
        });

        // Limpiar input al enviar
        aiSend.addEventListener('click', () => {
            aiInput.value = '';
        });

        // Limpiar input al presionar Enter
        aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                aiInput.value = '';
            }
        });

        // Efecto visual al hacer click en el micrófono
        aiMic.addEventListener('click', () => {
            aiMic.classList.add('active');
            setTimeout(() => {
                aiMic.classList.remove('active');
            }, 200);
        });
    }

    // Código del chat
    const chatToggle = document.getElementById('chat-toggle');
    const chatContainer = document.getElementById('chat-container');
    const chatClose = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-input');
    const sendMessage = document.getElementById('send-message');
    const chatMessages = document.getElementById('chat-messages');

    if (chatToggle && chatContainer) {
        // Función para alternar la visibilidad del chat
        function toggleChat() {
            chatContainer.classList.toggle('hidden');
        }

        // Abrir chat al hacer clic en el botón
        chatToggle.addEventListener('click', toggleChat);

        // Cerrar chat al hacer clic en la X
        chatClose.addEventListener('click', toggleChat);

        // Enviar mensaje al hacer clic en el botón o presionar Enter
        function sendChatMessage() {
            const message = chatInput.value.trim();
            if (message) {
                // Añadir mensaje del usuario
                const userMessage = document.createElement('p');
                userMessage.className = 'bg-green-600 rounded-lg p-3 text-white mb-2 ml-auto max-w-[80%]';
                userMessage.textContent = message;
                chatMessages.appendChild(userMessage);

                // Limpiar input
                chatInput.value = '';
                
                // Scroll al último mensaje
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }

        sendMessage.addEventListener('click', sendChatMessage);
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });

        // Cerrar chat al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!chatContainer.contains(e.target) && !chatToggle.contains(e.target) && !chatContainer.classList.contains('hidden')) {
                chatContainer.classList.add('hidden');
            }
        });
    }
}); 