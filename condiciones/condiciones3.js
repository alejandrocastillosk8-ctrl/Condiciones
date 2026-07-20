const d1 = document.getElementById('digito1');
const d2 = document.getElementById('digito2');
const d3 = document.getElementById('digito3');
const btnIngresar = document.getElementById('btnIngresar');
const resultado = document.getElementById('mensajePassword');

btnIngresar.addEventListener('click', () => {
  
    const passwordCompleto = d1.value + d2.value + d3.value;

    
    if (passwordCompleto === "911") {
        resultado.textContent = "password 1 correcto";
        resultado.style.color = "green";
    } else if (passwordCompleto === "714") {
        resultado.textContent = "password 2 es correcto";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "password incorrecto";
        resultado.style.color = "red";
    }
});