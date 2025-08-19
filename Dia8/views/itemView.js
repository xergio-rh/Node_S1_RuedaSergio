const ItemView = {
    mostrarMenu() {
        console.log("\n=== CRUD de Items ===");
        console.log("1) Crear");
        console.log("2) Listar");
        console.log("3) Ver por ID");
        console.log("4) Actualizar");
        console.log("5) Eliminar");
        console.log("0) Salir");

    },
    pedirOpcion(prompt){
        const op= prompt("Elige una opción: ");
        return op.trim();

    },
    pedirDatosCreacion(prompt){
        const nombre = prompt("Nombre: ").trim();
        const descripcion = prompt("Descripción: ").trim();
        return {nombre,descripcion};

    },
    pedirDatosActualizacion(prompt, itemExistente){
        console.log(`Valores actuales: Nombre="${itemExistente.nombre}", Descripción="${itemExistente.descripcion}"`);
        console.log("Deja en blanco para mantener el valor actual.");
        const nombre = prompt("Nuevo Nombre: ").trim();
        const descripcion = prompt("Nueva Descripción: ").trim();
        return {
            nombre: nombre || undefined,
            descripcion: descripcion || undefined
        };

    },
    pedirId(prompt){
        const idStr = prompt("ID: ").trim();
        const id = Number(idStr);
        return isNaN(id) ? null : id;

    },
    mostrarLista(items){
        if(items.length === 0){
            console.log("\nNo hay items.");
            return;
        }
        console.log("\nLista de Items:");
        items.forEach(item => {
            console.log(`ID: ${item.id}, Nombre: ${item.nombre}, Descripción: ${item.descripcion}`);
            console.log(`Creado: ${item.creadoEn.toLocaleString()}, Actualizado: ${item.actualizadoEn.toLocaleString()}`);
            console.log("---");
        });

    },
    mostrarItem(item){
        console.log("\nDetalles del Item:");
        console.log(`ID: ${item.id}`);
        console.log(`Nombre: ${item.nombre}`);
        console.log(`Descripción: ${item.descripcion}`);
        console.log(`Creado: ${item.creadoEn.toLocaleString()}`);
        console.log(`Actualizado: ${item.actualizadoEn.toLocaleString()}`);
    },
    mostrarMensaje(msg){
        console.log(`\n${msg}`);
    }


    
}
module.exports={ItemView}