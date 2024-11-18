let validarContrasena=(contrasena)=> {
  
    if (!contrasena) {
        let verificar = document.querySelector(".mensaje").style.display = "flex"
        let verificar_contra = document.querySelector("#mensaje").innerHTML= `
            La contraseña no puede estar vacía.
        `  
     console.log( )
    }

  
    const regexMayuscula = /[A-Z]/; // Al menos una mayúscula
    const regexMinuscula = /[a-z]/; // Al menos una minúscula
    const regexNumero = /[0-9]/;    // Al menos un número

    
    if (contrasena.length < 8) {
        return "La contraseña debe tener al menos 8 caracteres.";
    }

   
    if (!regexMayuscula.test(contrasena)) {
        return "La contraseña debe contener al menos una letra mayúscula.";
    }

    if (!regexMinuscula.test(contrasena)) {
        return "La contraseña debe contener al menos una letra minúscula.";
    }

    if (!regexNumero.test(contrasena)) {
        return "La contraseña debe contener al menos un número.";
    }

  
    return "La contraseña es válida.";
}

const enviar_registro= async(e)=>{
    e.preventDefault()
    let correo = document.querySelector("#correo").value
    let contraseña = document.querySelector("#contraseña").value
    let contraseña2 = document.querySelector("#contraseña2").value
    let datepicker = document.querySelector("#datepicker").value
    if(contraseña==contraseña2){
        validarContrasena()
        let datos ={
            correo,
            contra:contraseña,
            datepicker
        }
        await fetch('/registro', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(datos) 
        })
        .then(respuesta => respuesta.json())
        .then(data =>  window.location.href= data.redirect)
    }
  
}
document.getElementById('formRegistro').addEventListener('submit', enviar_registro);