class Negociacoes {

    constructor(contexto, armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;
        this._contexto = contexto;
        Object.freeze(this);
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        this._armadilha.call(this._contexto, this);
    }

    paraArray(){
        return [].concat(this._negociacoes);
    }

    get VolumeTotal() {
        // let total = 0;
        // for (let i = 0; i < this._negociacoes.length; i++) {
        //     total += this._negociacoes[i].volume;
        // }
        // return total;
        return this._negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0);
    }

    esvazia () {
        this._negociacoes.length = 0;
        this._armadilha.call(this._contexto, this);
    }

}