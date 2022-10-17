class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQtde = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new Negociacoes();
    }

    adiciona(event) {
        event.preventDefault();

        this._negociacoes.adiciona(this._criaNegociacao());

        console.log(this._negociacoes.paraArray());

        this._limparFormulario();
    };

    _limparFormulario () {
        this._inputData.value = '2022-01-01';
        this._inputQtde.value = 1
        this._inputValor.value = 2.0
        this._inputData.focus();
    }

    _criaNegociacao(){
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQtde.value),
            parseFloat(this._inputValor.value)
        );
    }

}