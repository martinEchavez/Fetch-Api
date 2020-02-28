var contenido = document.querySelector('#contenido')

function obtener() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        var persona =data.results['0'];
        contenido.innerHTML = `
            <img src="${persona.picture.large}" class="img-fluid rounded-circle">
            <p>Género: ${persona.gender} </p>
            <p>Nombre: ${persona.name.first}</p>
            <p>Apellido: ${persona.name.last}</p>
            <p>Email: ${persona.email}</p>
        `
    })    
}