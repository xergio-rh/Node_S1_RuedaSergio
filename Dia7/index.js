let prompt = require(`prompt-sync`)();
const path = "./db.json";
const fs = require(`fs`);




function loadData(){
    if(!fs.existsSync(path)){
        fs.writeFileSync(path,"[]");
    }
    const data = fs.readFileSync(path);
    return JSON.parse(data);
}





function saveData(data){
    fs.writeFileSync(path,JSON.stringify(data));
}




function showMenu(){
    console.log("\n=== CRUD en consola con Node.js ===");
    console.log("1. Crear elemento");
    console.log("2. Listar elementos");
    console.log("3. Actualizar elementos");
    console.log("4. Eliminar elemento")
    console.log("5. Salir\n");

    let opcionUsuario = prompt("Selecciona una opcion: ");
    return opcionUsuario;
}

function handleMenu(option){
    switch (option){
        case "1":
            createItem();
            break;
        case "2":
            ListItems();
            break;
        case "3":
            updateItem();
            break;
        case "4":
            deleteItem();
            break;
        case "5":
            booleanito = false;
        default:
            console.log("opcion invalida");

    }
}

function createItem(){
    let nombre = prompt("Ingresa un nombre: ");
    const id = Date.now();
    const data = loadData();
    data.push({
        id,nombre
    });
    console.log(data);
    saveData(data);
    console.log("El elemento fue agregado!");
    showMenu();
}
let booleanito = true;

while(booleanito){
    let opcionUsuario= showMenu();
    handleMenu(opcionUsuario);
}
