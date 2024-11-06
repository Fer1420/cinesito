const enviar_registro= async(e)=>{
    e.preventDefault()
    let correo = document.querySelector("#correo").value
    let contraseña = document.querySelector("#contraseña").value
    let datepicker = document.querySelector("#datepicker").value
    let datos ={
        correo,
        contraseña,
        datepicker
    }
    await fetch('/registro', {
        method: 'POST', // El método de la solicitud (puede ser 'POST', 'PUT', etc.)
        headers: {
            'Content-Type': 'application/json' // Asegúrate de que el servidor esté esperando JSON
        },
        body: JSON.stringify(datos) // Convierte los datos en un string JSON
    })
    .then(respuesta => respuesta.json())
    .then(data =>  window.location.href= data.redirect)
}
document.getElementById('formRegistro').addEventListener('submit', enviar_registro);