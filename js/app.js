const contenedor = document.querySelector("#contenedorUsuarios");

function mostrarUsuarios(usuarios) {
    contenedor.innerHTML = "";

    usuarios.forEach(usuario => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
            <h3>${usuario.name}</h3>
            <p>${usuario.email}</p>
            <p>${usuario.address.city}</p>
            <p>${usuario.company.name}</p>
            <button class="detalles">+ Ver mas detalles</button>
        `;

        contenedor.appendChild(tarjeta);
    })
}

let usuariosGlobales = [];
let filtrados = [];

const mensaje = document.querySelector("#mensaje");

async function cargarUsuarios() {
    try {
        mensaje.textContent = "Cargando usuarios...";

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        usuariosGlobales = await response.json();
        filtrados = usuariosGlobales;
        mostrarUsuarios(usuariosGlobales);
        mensaje.textContent = "";
    } catch(error) {
        mensaje.textContent = "No fue posible cargar la informacion";
        console.error(error);
    }
}

cargarUsuarios();

const buscar = document.querySelector("#buscar");
let ordenarAlfabeticamente = false;

buscar.addEventListener("input", () => {
    const texto = buscar.value.toLowerCase();
    filtrados = usuariosGlobales.filter(usuario => usuario.name.toLowerCase().includes(texto));

    mensaje.textContent = filtrados.length === 0 ? "No se encontraron coincidencias" : "";

    if(ordenarAlfabeticamente) {
        filtrados = filtrados.sort((a, b) => a.name.localeCompare(b.name));
    }

    mostrarUsuarios(filtrados);
})

const ordenar = document.querySelector("#ordenar");

ordenar.addEventListener("click", () => {
    ordenarAlfabeticamente = !ordenarAlfabeticamente;
    ordenar.textContent = ordenarAlfabeticamente ? "A - Z" : "Z - A";

    const ordenados = filtrados.sort((a, b) => ordenarAlfabeticamente ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

    mostrarUsuarios(ordenados);
})

const detalles = document.querySelector(".detalles");

contenedor.addEventListener("click", (e) => {
    if(e.target.classList.contains("detalles")) {
        const tarjeta = e.target.parentElement;
        const detalles = tarjeta.querySelector(".detalles");

        if(detalles.textContent === "+ Ver mas detalles") {
            detalles.textContent = "- Mostrar menos";
            
            const nombreBuscado = tarjeta.querySelector("h3");
            const usuario = usuariosGlobales.find(usuario => usuario.name === nombreBuscado.textContent);
            const masInformacion = document.createElement("div");
            masInformacion.classList.add("mas-informacion");

            masInformacion.innerHTML = `
                <p>${usuario.email}</p>
                <p>${usuario.phone}</p>
                <p>${usuario.website}</p>
            `;

            tarjeta.appendChild(masInformacion);
        } else {
            detalles.textContent = "+ Ver mas detalles";
            const masInformacion = tarjeta.querySelector(".mas-informacion");
            masInformacion.remove();
        }
    } 
});