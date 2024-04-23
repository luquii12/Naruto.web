function validarNombre() {
    const nombre = document.getElementById("Nombre").value.trim();
    if (nombre.length === 0) {
        alert("Por favor, completa el campo Nombre.");
        return;
    }
    validarApellidos();
}

function validarApellidos() {
    const apellidos = document.getElementById("Apellidos").value.trim();
    if (apellidos.length === 0) {
        alert("Por favor, completa el campo Apellidos.");
        return;
    }
    validarCorreo();
}

function validarCorreo() {
    const correo = document.getElementById("Correo").value.trim();
    if (correo.length === 0) {
        alert("Por favor, completa el campo Correo electrónico.");
        return;
    }
    validarTelefono();
}

function validarTelefono() {
    const telefono = document.getElementById("Tel").value.trim();
    if (telefono.length === 0) {
        alert("Por favor, completa el campo Teléfono.");
        return;
    }
    validarPais();
}

function validarPais() {
    const pais = document.getElementById("Pais").value.trim();
    if (pais.length === 0) {
        alert("Por favor, completa el campo País.");
        return;
    }
    validarCiudad();
}

function validarCiudad() {
    const ciudad = document.getElementById("Ciudad").value.trim();
    if (ciudad.length === 0) {
        alert("Por favor, completa el campo Ciudad.");
        return;
    }
    validarMotivo();
}

function validarMotivo() {
    const motivo = document.getElementById("Motivo").value.trim();
    if (motivo.length === 0) {
        alert("Por favor, completa el campo Motivo.");
        return;
    }
    validarTerminos();
}

function validarTerminos() {
    const terminos = document.getElementById("Si").checked;
    if (!terminos) {
        alert("Debes aceptar los términos y condiciones.");
        return;
    }

    // Si todas las validaciones pasan, se envía el formulario
    document.getElementById("miFormulario").submit();
}

