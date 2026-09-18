const pantallas = document.querySelectorAll(".pantalla");

const btnLogin = document.getElementById("btnLogin");
const btnRegistro = document.getElementById("btnRegistro");
const btnCrearCuenta = document.getElementById("btnCrearCuenta");
const btnVolverLogin = document.getElementById("btnVolverLogin");
const btnSalir = document.getElementById("btnSalir");
const cerrarSesion = document.getElementById("cerrarSesion");

const mensajeLogin = document.getElementById("mensajeLogin");
const mensajeRegistro = document.getElementById("mensajeRegistro");
const nombreUsuario = document.getElementById("nombreUsuario");


function mostrarPantalla(id) {
    pantallas.forEach(function (pantalla) {
        pantalla.classList.remove("activa");
    });
    const pantalla = document.getElementById(id);
    if (pantalla) {
        pantalla.classList.add("activa");
    }
}

btnRegistro.addEventListener("click", function () {
    mensajeLogin.textContent = "";
    mostrarPantalla("registro");

});

btnVolverLogin.addEventListener("click", function () {
    mensajeRegistro.textContent = "";
    mostrarPantalla("login");

});

btnCrearCuenta.addEventListener("click", function () {

    const usuario =
        document.getElementById("registroUsuario").value.trim();
    const password =
        document.getElementById("registroPassword").value;
    const confirmar =
        document.getElementById("registroConfirmar").value;

    if (usuario === "" || password === "" || confirmar === "") {
        mensajeRegistro.textContent =
            "Completa todos los campos.";
        mensajeRegistro.style.color = "red";
        return;
    }

    if (password !== confirmar) {
        mensajeRegistro.textContent =
            "Las contraseñas no coinciden.";
        mensajeRegistro.style.color = "red";
        return;
    }

    const usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExiste =
        usuarios.some(function (cuenta) {
            return cuenta.usuario === usuario;
        });

    if (usuarioExiste) {
        mensajeRegistro.textContent =
            "Ese usuario ya existe.";
        mensajeRegistro.style.color = "red";
        return;
    }

    const nuevaCuenta = {
        usuario: usuario,
        password: password,
        tipo: "usuario"

    };

    usuarios.push(nuevaCuenta);

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    mensajeRegistro.textContent =
        "Cuenta creada correctamente.";
    mensajeRegistro.style.color = "green";

    document.getElementById("registroUsuario").value = "";
    document.getElementById("registroPassword").value = "";
    document.getElementById("registroConfirmar").value = "";

    setTimeout(function () {
        mostrarPantalla("login");
        mensajeRegistro.textContent = "";
    }, 1000);

});

btnLogin.addEventListener("click", function () {

    const usuario =
        document.getElementById("loginUsuario").value.trim();

    const password =
        document.getElementById("loginPassword").value;

    const usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];

    const cuenta =
        usuarios.find(function (usuarioGuardado) {
            return (
                usuarioGuardado.usuario === usuario &&
                usuarioGuardado.password === password
            );

        });

    if (!cuenta) {
        mensajeLogin.textContent =
            "Usuario o contraseña incorrectos.";
        mensajeLogin.style.color = "red";
        return;
    }

    localStorage.setItem(
        "usuarioActivo",
        cuenta.usuario
    );

    nombreUsuario.textContent =
        cuenta.usuario.toUpperCase();

    document.getElementById("loginUsuario").value = "";
    document.getElementById("loginPassword").value = "";
    mensajeLogin.textContent = "";
    mostrarPantalla("menu");

});

cerrarSesion.addEventListener("click", function () {
    localStorage.removeItem("usuarioActivo");
    mostrarPantalla("login");

});

btnSalir.addEventListener("click", function () {
    localStorage.removeItem("usuarioActivo");
    mostrarPantalla("login");

});

const tarjetas =
    document.querySelectorAll(".tarjeta[data-pantalla]");

tarjetas.forEach(function (tarjeta) {

    tarjeta.addEventListener("click", function () {
        const pantalla =
            tarjeta.dataset.pantalla;
        mostrarPantalla(pantalla);
    });

});

const botonesVolver =
    document.querySelectorAll(".volver");

botonesVolver.forEach(function (boton) {
    boton.addEventListener("click", function () {
        mostrarPantalla("menu");

    });

});

const calcularMuro =
    document.getElementById("calcularMuro");

calcularMuro.addEventListener("click", function () {
    const largo =
        Number(document.getElementById("muroLargo").value);
    const alto =
        Number(document.getElementById("muroAlto").value);

    const area = largo * alto;
    const ladrillos = area * 50;
    const cemento = area * 5;
    const arena = area * 0.012;

    document.getElementById("resultadoMuro").textContent =
        area.toFixed(2) + " m²";
    document.getElementById("ladrillos").textContent =
        Math.ceil(ladrillos);
    document.getElementById("cementoMuro").textContent =
        cemento.toFixed(2) + " kg";
    document.getElementById("arenaMuro").textContent =
        arena.toFixed(3) + " m³";

});

const calcularViga =
    document.getElementById("calcularViga");

calcularViga.addEventListener("click", function () {
    const largo =
        Number(document.getElementById("vigaLargo").value);

    const cemento = largo * 6.25;
    const arena = largo * 0.02;
    const piedra = largo * 0.02;
    const hierro10 = largo * 4;
    const hierro4 = largo * 3;

    document.getElementById("vigaCemento").textContent =
        cemento.toFixed(2) + " kg";
    document.getElementById("vigaArena").textContent =
        arena.toFixed(3) + " m³";
    document.getElementById("vigaPiedra").textContent =
        piedra.toFixed(3) + " m³";
    document.getElementById("vigaHierro10").textContent =
        hierro10.toFixed(2) + " m";
    document.getElementById("vigaHierro4").textContent =
        hierro4.toFixed(2) + " m";

});

const calcularColumna =
    document.getElementById("calcularColumna");

calcularColumna.addEventListener("click", function () {
    const largo =
        Number(document.getElementById("columnaLargo").value);

    const cemento = largo * 7.5;
    const arena = largo * 0.016;
    const piedra = largo * 0.016;
    const hierro10 = largo * 6;
    const hierro4 = largo * 3;

    document.getElementById("columnaCemento").textContent =
        cemento.toFixed(2) + " kg";
    document.getElementById("columnaArena").textContent =
        arena.toFixed(3) + " m³";
    document.getElementById("columnaPiedra").textContent =
        piedra.toFixed(3) + " m³";
    document.getElementById("columnaHierro10").textContent =
        hierro10.toFixed(2) + " m";
    document.getElementById("columnaHierro4").textContent =
        hierro4.toFixed(2) + " m";

});

const calcularContrapiso =
    document.getElementById("calcularContrapiso");

calcularContrapiso.addEventListener("click", function () {

    const espesor =
        Number(document.getElementById("espesor").value);
    const ancho =
        Number(document.getElementById("ancho").value);
    const largo =
        Number(document.getElementById("largo").value);

    const volumen =
        espesor * ancho * largo;
    const cemento =
        volumen * 105;
    const arena =
        volumen * 0.21;
    const piedra =
        volumen * 0.90;

    document.getElementById("volumen").textContent =
        volumen.toFixed(2) + " m³";
    document.getElementById("contraCemento").textContent =
        cemento.toFixed(2) + " kg";
    document.getElementById("contraArena").textContent =
        arena.toFixed(2) + " m³";
    document.getElementById("contraPiedra").textContent =
        piedra.toFixed(2) + " m³";

});

const calcularTecho =
    document.getElementById("calcularTecho");

calcularTecho.addEventListener("click", function () {
    const metros =
        Number(document.getElementById("metrosTecho").value);

    const cemento = metros * 43;
    const arena = metros * 0.072;
    const hierro8 = metros * 7;
    const hierro6 = metros * 4;

    document.getElementById("techoCemento").textContent =
        cemento.toFixed(2) + " kg";
    document.getElementById("techoArena").textContent =
        arena.toFixed(3) + " m³";
    document.getElementById("techoHierro8").textContent =
        hierro8.toFixed(2) + " m";
    document.getElementById("techoHierro6").textContent =
        hierro6.toFixed(2) + " m";

});

const calcularPiso =
    document.getElementById("calcularPiso");
calcularPiso.addEventListener("click", function () {

    const ancho =
        Number(document.getElementById("pisoAncho").value);

    const largo =
        Number(document.getElementById("pisoLargo").value);

    const area =
        ancho * largo;

    const extra =
        area * 1.10;

    document.getElementById("areaPiso").textContent =
        area.toFixed(2) + " m²";
    document.getElementById("extraPiso").textContent =
        extra.toFixed(2) + " m²";

});

const calcularPintura =
    document.getElementById("calcularPintura");
calcularPintura.addEventListener("click", function () {
    const metros =
        Number(document.getElementById("metrosPintura").value);
    const litros =
        metros / 6;
    document.getElementById("superficie").textContent =
        metros.toFixed(2) + " m²";
    document.getElementById("litros").textContent =
        litros.toFixed(2) + " L";
});

const usuarioActivo =
    localStorage.getItem("usuarioActivo");

if (usuarioActivo) {
    nombreUsuario.textContent =
        usuarioActivo.toUpperCase();
    mostrarPantalla("menu");

}