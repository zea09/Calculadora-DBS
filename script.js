const pantallas = document.querySelectorAll(".pantalla");
function mostrarPantalla(id) {
    pantallas.forEach(function(pantalla) {
        pantalla.classList.remove("activa");
    });
    document.getElementById(id).classList.add("activa");
}
document.getElementById("btnRegistro").addEventListener("click", function() {
    mostrarPantalla("registro");
});
document.getElementById("btnVolverLogin").addEventListener("click", function() {
    mostrarPantalla("login");
});
document.getElementById("btnCrearCuenta").addEventListener("click", function() {
    mostrarPantalla("login");
});
document.getElementById("btnLogin").addEventListener("click", function() {
    mostrarPantalla("menu");
});
document.getElementById("btnSalir").addEventListener("click", function() {
    mostrarPantalla("login");
});
document.getElementById("cerrarSesion").addEventListener("click", function() {
    mostrarPantalla("login");
});
const tarjetas = document.querySelectorAll(".tarjeta[data-pantalla]");
tarjetas.forEach(function(tarjeta) {
    tarjeta.addEventListener("click", function() {
        const pantalla = tarjeta.dataset.pantalla;
        mostrarPantalla(pantalla);
    });
});
const botonesVolver = document.querySelectorAll(".volver");
botonesVolver.forEach(function(boton) {
    boton.addEventListener("click", function() {
        mostrarPantalla("menu");
    });
});
const botonesCalcular = document.querySelectorAll(".calcular");
botonesCalcular.forEach(function(boton) {
    boton.addEventListener("click", function() {
        alert("El botón CALCULAR funciona correctamente.");
    });
});