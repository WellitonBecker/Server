class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQtde = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        let data       = DateConverter.paraData(this._inputData.value);
        let negociacao = new Negociacao(data, parseInt(this._inputQtde.value), parseInt(this._inputValor.value));

        console.log(DateConverter.paraTexto(negociacao.data));
        // console.log(this._inputData.value);
        // console.log(this._inputQtde.value);
        // console.log(this._inputValor.value);
    };
}