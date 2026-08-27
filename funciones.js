function validarDatos(){
    document.addEventListener

    let nombre = document.getElementById("nombre").value

    let correo = document.getElementById("correo").value

    if (nombre == "") {
        alert("error campo vacio");
        return false;
    }

    
    if (correo === "") {
        alert("error campo vacio");
        return false; 
    }

    alert("¡Todo bien! Enviando formulario...");
    return true;
}
aaaaa