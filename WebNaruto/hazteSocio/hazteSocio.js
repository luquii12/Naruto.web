function validarFormulario() {
    if (!validarNombre())
        return false;
    if (!validarApellidos())
        return false;
    if (!validarCorreo())
        return false;
    if (!validarTelefono())
        return false;
    if (!validarPais())
        return false;
    if (!validarCiudad())
        return false;
    if (!validarMotivo())
        return false;
    if (!validarTerminos())
        return false;
    return true;
}

function validarNombre() {
    const nombre = document.getElementById("Nombre").value.trim();
    if (nombre.length === 0) {
        alert("Por favor, completa el campo Nombre.");
        return false;
    }
    return true;
}

function validarApellidos() {
    const apellidos = document.getElementById("Apellidos").value.trim();
    if (apellidos.length === 0) {
        alert("Por favor, completa el campo Apellidos.");
        return false;
    }
    return true;
}

function validarCorreo() {
    const correo = document.getElementById("Correo").value.trim();
    if (correo.length === 0) {
        alert("Por favor, completa el campo Correo electrónico.");
        return false;
    }
    return true;
}

function validarTelefono() {
    const telefono = document.getElementById("Tel").value.trim();
    if (telefono.length === 0) {
        alert("Por favor, completa el campo Teléfono.");
        return false;
    }
    return true;
}

function validarPais() {
    const pais = document.getElementById("Pais").value.trim();
    if (pais.length === 0) {
        alert("Por favor, completa el campo País.");
        return false;
    }
    return true;
}

function validarCiudad() {
    const ciudad = document.getElementById("Ciudad").value.trim();
    if (ciudad.length === 0) {
        alert("Por favor, completa el campo Ciudad.");
        return false;
    }
    return true;
}

function validarMotivo() {
    const motivo = document.getElementById("Motivo").value.trim();
    if (motivo.length === 0) {
        alert("Por favor, completa el campo Motivo.");
        return false;
    }
    return true;
}

function validarTerminos() {
    const terminos = document.getElementById("Si").checked;
    if (!terminos) {
        alert("Debes aceptar los términos y condiciones.");
        return false;
    }
    return true;
}
