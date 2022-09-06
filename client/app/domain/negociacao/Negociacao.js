class Negociacao {

    constructor(data, quantidade, valor){
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    set data(data){
        this._data = data;
    }

    get data(){
        return this._data;
    }
    
    set quantidade(quantidade){
        this._quantidade = quantidade;
    }

    get quantidade(){
        return this._quantidade;
    }

    
    set valor(valor){
        this._valor = valor;
    }

    get valor(){
        return this._valor;
    }

    obterVolume() {
        return this.getQuantidade() * this.getValor();
    }

}