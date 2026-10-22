
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

function canviarColor() {
    // Canviem el color del text
    document.getElementById("textEstils").style.color = "red";
}

function canviarTamany() {
    // Fem el text més gran
    document.getElementById("textEstils").style.fontSize = "30px";
}

function canviarFons() {
    // Canviem el color de fons
    document.getElementById("textEstils").style.backgroundColor = "yellow";
}

function restablirEstils() {
    // Tornem als estils originals
    document.getElementById("textEstils").removeAttribute("style");
}


