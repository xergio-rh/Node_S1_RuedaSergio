
class ItemController{
    constructor({model,view,prompt}){
        this.model=model;
        this.view=view;
        this.prompt = prompt
    }
    crear(){
        const datos = this.view.pedirDatosCreacion(this.prompt);
        if(!datos.nombre){
            this.view.mostrarMensaje("El nombre es obligatorio.");
            return;
        }
        const creado = this.model.crear(datos);
        this.view.mostrarMensaje(`Creado con ID ${creado.id}.`);
    }
    listar(){
        const items = this.model.listar();
        this.view.mostrarLista(items);
    }
    verPorId(){
        const id = this.view.pedirId(this.prompt);
        if(!id){
            this.view.mostrarMensaje("ID es obligatorio.");
            return;
        }
        const item = this.model.buscarPorId(id);
        if(!item){
            this.view.mostrarMensaje(`No se encontró item con ID ${id}.`);
            return;
        }
        this.view.mostrarItem(item);
    }
    actualizar(){
        const id = this.view.pedirId(this.prompt);
        if(!id){
            this.view.mostrarMensaje("ID es obligatorio.");
            return;
        }
        const itemExistente = this.model.buscarPorId(id);
        if(!itemExistente){
            this.view.mostrarMensaje(`No se encontró item con ID ${id}.`);
            return;
        }
        const datos = this.view.pedirDatosActualizacion(this.prompt, itemExistente);
        const actualizado = this.model.actualizar(id, datos);
        if(actualizado){
            this.view.mostrarMensaje(`Item con ID ${id} actualizado.`);
        } else {
            this.view.mostrarMensaje("Error al actualizar.");
        }
    }
    eliminar(){
        const id = this.view.pedirId(this.prompt);
        if(!id){
            this.view.mostrarMensaje("ID es obligatorio.");
            return;
        }
        const eliminado = this.model.eliminar(id);
        if(eliminado){
            this.view.mostrarMensaje(`Item con ID ${id} eliminado.`);
        } else {
            this.view.mostrarMensaje(`No se encontró item con ID ${id}.`);
        }
    }
}
module.exports={ItemController};