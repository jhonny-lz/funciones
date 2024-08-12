const elemento = document.getElementById("ele1");
elemento.style.backgroundColor = 'green'; 

function pintar() {
    elemento.style.backgroundColor = 'yellow';
}

elemento.addEventListener("click", pintar);