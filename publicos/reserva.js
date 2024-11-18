const enviar_reservar= async(e)=>{
    e.preventDefault()
    let datepicker = document.querySelector("#datepicker").value
    let hora = document.querySelector("#hora").value
    let asiento = document.querySelector("#asiento").value
    
    let datos ={
        datepicker,
        hora,
        asiento
        
    }
    await fetch('/reserva', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(datos)
    })
    .then(respuesta => respuesta.json())
    .then(data =>  window.location.href= data.redirect)
}
document.getElementById('formreserva').addEventListener('submit', enviar_reservar);