let amigos = [];

// Función para agregar un nombre
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validación: Nombre no vacío y evitar duplicados
    if (!nombre) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("El nombre ya está en la lista. Por favor, ingresa un nombre diferente.");
        return;
    }

    // Agregar nombre al array y actualizar la lista
    amigos.push(nombre);
    actualizarLista();
    input.value = ""; 
}

// Función para actualizar la lista de nombres
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = amigos.length ? amigos.map(nombre => `<li>${nombre}</li>`).join('') : "<li class='empty-message'>No hay nombres agregados aún.</li>";
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos nombres para realizar el sorteo.");
        return;
    }

    // Seleccionar un nombre aleatorio
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultado.style.color = "#05DF05"; 
}