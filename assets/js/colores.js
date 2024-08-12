function cambioColor(event) {
    event.target.style.backgroundColor = 'black';
}

document.getElementById('objetoazul').addEventListener('click', cambioColor);
document.getElementById('objetorojo').addEventListener('click', cambioColor);
document.getElementById('objetoverde').addEventListener('click', cambioColor);
document.getElementById('objetoamarillo').addEventListener('click', cambioColor);

