class Item {
    constructor({id, nombre, descripcion}) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.creadoEn = new Date();
        this.actualizadoEn = new Date();
    }
}

class ItemModel{
    constructor(){
        this._items = [];
        this._seq=1
    }
    crear({nombre,descripcion}){
        const nuevo = new Item({
            id:this._seq++,
            nombre:(nombre || "").trim(),
            descripcion:(descripcion || "").trim()
        });
        this._items.push(nuevo);
        return nuevo;
    }
    listar(){
        return [...this._items];
    }

    buscarPorId(id){
        return this._items.find(i => i.id === Number(id)) || null;
    }

    actualizar(id,{nombre,descripcion}){
        const item = this.buscarPorId(id);
        if(!item) return null;
        if(typeof nombre==="string") item.nombre = nombre.trim();
        if(typeof descripcion==="string") item.descripcion = nombre.trim();
        item.actualizadoEn= new Date();
        return item;
    }

    eliminar(id){
        const idx = this._items.findIndex(i => i["id"]=== Number(id));
        if (idx === -1) return false;
        this._items.splice(idx,1);
        return true;

    }
}

module.exports = {ItemModel};
