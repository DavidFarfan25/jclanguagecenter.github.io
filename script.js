function mostrarCuadro(id) {
    var popup = document.getElementById(id);
    var overlay = document.getElementById('overlay');
    popup.classList.add("show"); 
    overlay.classList.add("show");
}

function ocultarCuadro(id) {
    var popup = document.getElementById(id);
    var overlay = document.getElementById('overlay');
    popup.classList.remove("show");
    overlay.classList.remove("show");
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío real del formulario

    // Limpiar mensajes anteriores
    const thankYouMessage = document.getElementById('thankYouMessage');
    const errorMessage = document.getElementById('errorMessage');
    thankYouMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Validar que todos los campos estén llenos
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('email').value;
    const numero = document.getElementById('numero').value;
    const mensaje = document.getElementById('mensaje').value;
    const privacidad = document.getElementById('privacidad').checked;

    if (!nombres || !apellidos || !email || !numero || !mensaje || !privacidad) {
        // Mostrar mensaje de error
        errorMessage.style.display = 'block';
        
        // Agregar clase de temblor al formulario
        const formSection = document.querySelector('.form-contact');
        formSection.classList.add('shake');

        // Remover la clase de temblor después de la animación
        setTimeout(function() {
            formSection.classList.remove('shake');
        }, 500); // Duración de la animación
        return; // Salir de la función
    }

    // Mostrar el mensaje de agradecimiento
    thankYouMessage.style.display = 'block';

    // Opcional: limpiar los campos del formulario
    document.getElementById('contactForm').reset();

    // Hacer que el mensaje desaparezca después de 5 segundos con animación
    setTimeout(function() {
        thankYouMessage.classList.add('fade-out'); // Añadir clase de fade out

        // Esperar la animación de fade out y luego ocultar el mensaje
        setTimeout(function() {
            thankYouMessage.style.display = 'none'; // Ocultar el mensaje
            thankYouMessage.classList.remove('fade-out'); // Limpiar la clase para futuros usos
        }, 400); // Esperar que termine la animación de fade out
    }, 4000); // 5000 milisegundos = 5 segundos
});

