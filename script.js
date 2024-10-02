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
    event.preventDefault(); 

    const thankYouMessage = document.getElementById('thankYouMessage');
    const errorMessage = document.getElementById('errorMessage');
    thankYouMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('email').value;
    const numero = document.getElementById('numero').value;
    const mensaje = document.getElementById('mensaje').value;
    const privacidad = document.getElementById('privacidad').checked;

    if (!nombres || !apellidos || !email || !numero || !mensaje || !privacidad) {
        errorMessage.style.display = 'block';
        
        const formSection = document.querySelector('.form-contact');
        formSection.classList.add('shake');

        setTimeout(function() {
            formSection.classList.remove('shake');
        }, 500); 
        return; 
    }

    thankYouMessage.style.display = 'block';
    document.getElementById('contactForm').reset();
    
    setTimeout(function() {
        thankYouMessage.classList.add('fade-out'); 

        setTimeout(function() {
            thankYouMessage.style.display = 'none'; 
            thankYouMessage.classList.remove('fade-out');
        }, 400); 
    }, 4000); 
});

