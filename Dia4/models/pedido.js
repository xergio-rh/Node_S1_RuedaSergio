
class Pedido{
    constructor(id){
        this.id=id;
        this.items=[];
    }

    addItem(item){
        this.items.push(item);
    }
    total(){
        return this.items.reduce((acc,it)=>acc+it.subtotal(),0);
    }
}

module.exports = Pedido