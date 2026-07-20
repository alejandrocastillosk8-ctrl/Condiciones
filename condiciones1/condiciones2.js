
const input1 = document.getElementById('cantSticker1');
const input2 = document.getElementById('cantSticker2');
const input3 = document.getElementById('cantSticker3');
const boton = document.getElementById('btnVerificar');
const parrafoMensaje = document.getElementById('mensajeResultado');

boton.addEventListener('click', () => {

    const s1 = Number(input1.value) || 0;
    const s2 = Number(input2.value) || 0;
    const s3 = Number(input3.value) || 0;


    const sumaTotal = s1 + s2 + s3;


    if (sumaTotal <= 10) {
        parrafoMensaje.textContent = `Llevas ${sumaTotal} stickers`;
    } 

    else {
        parrafoMensaje.textContent = "Llevas demasiados stickers";
    }
});