
function canviarText() {
    // Busquem l'element i canviem el seu contingut
    document.getElementById("text").innerHTML =
        "El text ha canviat amb JavaScript!";
}

function encendreBombeta() {
    // Canviem la imatge per la bombeta encesa
    document.getElementById("bombeta").src =
        "https://www.w3schools.com/js/pic_bulbon.gif";
}

function apagarBombeta() {
    // Tornem a posar la bombeta apagada
    document.getElementById("bombeta").src =
        "https://www.w3schools.com/js/pic_bulboff.gif";
}

