class Negociacao {

    constructor(_data, _quantidade, _valor){
        Object.assign(this, {
            _data : new Date(_data.getTime()), 
            _quantidade, 
            _valor,
        })


        // this.data = new Date(data.getTime());
        // this.quantidade = quantidade;
        // this.valor = valor;
        Object.freeze(this);
    }

    set data(data){
        this._data = data;
    }

    get data(){
        // return this._data;
        return new Date(this._data.getTime())
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

    get volume (){
        return this.obterVolume();
    }

    obterVolume() {
        return this._quantidade * this._valor;
    }

}