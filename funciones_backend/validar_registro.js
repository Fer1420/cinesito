const regexMayuscula = /[A-Z]/; // Al menos una mayúscula
const regexMinuscula = /[a-z]/; // Al menos una minúscula
const regexNumero = /[0-9]/;    // Al menos un número

const validar =(contra)=>{
if (contra.length < 8) {
    return true
}
if (!regexMayuscula.test(contra)) {
    return "La contraseña debe contener al menos una letra mayúscula.";
}

if (!regexMinuscula.test(contra)) {
    return "La contraseña debe contener al menos una letra minúscula.";
}

if (!regexNumero.test(contra)) {
    return "La contraseña debe contener al menos un número.";
}
else {
    return false     
}
}

export{
    validar
}