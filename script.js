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