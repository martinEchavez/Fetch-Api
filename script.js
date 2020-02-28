var contenidoPerfil = document.querySelector('#contenidoPerfil')

function obtenerPerfil() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        let persona =data.results['0'];
        contenidoPerfil.innerHTML = `
            <img src="${persona.picture.large}" class="img-fluid rounded-circle">
            <p>Género: ${persona.gender} </p>
            <p>Nombre: ${persona.name.first}</p>
            <p>Apellido: ${persona.name.last}</p>
            <p>Email: ${persona.email}</p>
        `
    })    
}
var contenidoTabla = document.querySelector('#contenidoTabla')
function obtenerTabla() {
    fetch('tabla.json')
    .then(res => res.json())
    .then(data => {
        pintar(data)
        
    })    
}

function pintar(datos) {
    for (const persona of datos) {
        contenidoTabla.innerHTML += `
            <tr>
                <td>${persona.id}</td>
                <td>${persona.nombre}</td>
                <td>${persona.email}</td>
                <td>${persona.estado ? "Activo" : "Desactivo"}</td>
            </tr>
        `
    }
}