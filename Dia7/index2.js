let prompt = require(`prompt-sync`)();
const path = "./db.json";
const fs = require(`fs`);




function loadData() {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, "[]");
  }
  const data = fs.readFileSync(path);
  return JSON.parse(data);
}





function saveData(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}




function showMenu() {
  console.log("\n=== CRUD en consola con Node.js ===");
  console.log("1. Crear elemento");
  console.log("2. Listar elementos");
  console.log("3. Actualizar elemento");
  console.log("4. Eliminar elemento");
  console.log("5. Salir\n");

  let opcionUsuario = prompt("Selecciona una opcion: ");
  return opcionUsuario;
}



function handleMenu(option) {
  switch (option) {
    case "1":
      createItem();
      break;
    case "2":
      listItems();
      break;
    case "3":
      updateItem();
      break;
    case "4":
      deleteItem();
      break;
    case "5":
      booleanito = false;
      break;
    default:
      console.log("Opción inválida.");
  }
}

// [C] CREATE: Crea un nuevo elemento.
function createItem() {
  let nombre = prompt("Ingresa un nombre: ");
  const id = Date.now();
  const data = loadData();
  data.push({
    id,
    nombre
  });
  saveData(data);
  console.log("El elemento fue agregado!");
}

// [R] READ: Lista todos los elementos.
function listItems() {
  const data = loadData();
  if (data.length === 0) {
    console.log("No hay elementos para mostrar.");
    return;
  }
  console.log("\n--- Elementos ---");
  data.forEach((item) => {
    console.log(`ID: ${item.id} | Nombre: ${item.nombre}`);
  });
}

// [U] UPDATE: Actualiza un elemento existente.
function updateItem() {
  const data = loadData();
  listItems(); // Muestra la lista para que el usuario sepa qué ID actualizar.
  let idToUpdate = prompt("Ingresa el ID del elemento a actualizar: ");
  let itemFound = data.find((item) => item.id == idToUpdate);

  if (itemFound) {
    let nuevoNombre = prompt(`Ingresa el nuevo nombre para "${itemFound.nombre}": `);
    itemFound.nombre = nuevoNombre;
    saveData(data);
    console.log("Elemento actualizado con éxito!");
  } else {
    console.log("Elemento no encontrado.");
  }
}

// [D] DELETE: Elimina un elemento.
function deleteItem() {
    const data = loadData();
    listItems(); // Muestra la lista para que el usuario sepa qué ID eliminar.
    let idToDelete = prompt("Ingresa el ID del elemento a eliminar: ");

    // Buscar si el ID existe antes de filtrar
    const itemExists = data.some(item => item.id == idToDelete);

    if (itemExists) {
        const newData = data.filter(item => item.id != idToDelete);
        saveData(newData);
        console.log("Elemento eliminado con éxito!");
    } else {
        console.log("Elemento no encontrado.");
    }
}


let booleanito = true;
// Bucle principal del programa.
while (booleanito) {
  let opcionUsuario = showMenu();
  handleMenu(opcionUsuario);
}