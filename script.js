// Selecciona el contenedor de la cuadrícula, el input del usuario y el botón de reinicio desde el DOM
const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");

// Función para crear una cuadrícula con 256 divisiones
createGrid = () => {
    for(let i = 0; i < 256; i++) {
        const div = document.createElement("div"); // Crea un nuevo elemento div
        div.classList.add("square"); // Agrega la clase "square" al div
        grid.appendChild(div); // Añade el div al contenedor de la cuadrícula
    }
};

// Función para actualizar la cuadrícula según el valor del input del usuario
updateGrid = () => {
    grid.innerHTML = ""; // Vacía el contenido actual de la cuadrícula

    // Actualiza las columnas y filas de la cuadrícula en función del valor del input
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 2fr)`);

    grid.style.setProperty(
        "grid-template-rows",
        `repeat(${userInput.value}, 2fr)`);

    // Crea nuevas divisiones en función del valor del input
    for(let i = 0; i < userInput.value * userInput.value; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }

    console.log(userInput.value); // Muestra en consola el valor del input del usuario
};

// Selecciona un div y añade un evento de "mouseover" para cambiar la clase
const square = document.querySelector("div");

square.addEventListener("mouseover", function(event) {
    event.target.classList.replace("square", "color"); // Reemplaza la clase "square" por "color"
});

// Agrega un evento "change" al input para actualizar la cuadrícula cuando cambie
userInput.addEventListener("change", updateGrid);

// Agrega un evento "click" al botón de reinicio para reiniciar la cuadrícula
resetButton.addEventListener("click", function() {
    grid.innerHTML = "";
    userInput.value = "";
    grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createGrid(); // Llama a la función para crear una cuadrícula inicial
});

// Crea la cuadrícula inicial
createGrid();
