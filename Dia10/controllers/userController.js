class UsuarioController{
    constructor(modelo,vista){
        this.modelo=modelo;
        this.vista=vista;
    }
    async registrarUsuario(){
        const datos = this.vista.pedirDatosUsuario();
        try{
            const id = await this.modelo.crear(datos);
            this.vista.mostrarMensaje(`Usuario con ID ${id}`);
        }catch(error){
            this.vista.mostrarMensaje(`Error ${error.message}`);
        }
    }

    async mostrarUsuarios(){
        const usuarios = await this.modelo.listar();
        this.vista.mostrarUsuarios(usuarios);
    }
}
module.exports=UsuarioController;