class NegociacaoController {

    constructor(){
        const $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQtde = $('#quantidade');
        this._inputValor = $('#valor');
        
        this._negociacoes = new Bind(new Negociacoes(), new NegociacoesView('#negociacoes'), 'adiciona', 'esvazia');
        this._mensagem    = new Bind(new Mensagem(), new MensagemView('#mensagemView'), 'texto');
        this._service     = new NegociacaoServices();
    }

    adiciona(event) {
        try {
            event.preventDefault();
            this._negociacoes.adiciona(this._criaNegociacao());
            this._mensagem._texto = 'Negociação adicionada com sucesso!';
            this._limparFormulario();
        } catch (error) {
            console.log(error);
            if(error instanceof DataInvalidaException){
                this._mensagem._texto = error.message;
            } else {
                this._mensagem._texto = 'Um erro inesperado aconteceu';
            }
            
        }
        
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

    apaga(){
        this._negociacoes.esvazia();
        this._mensagem._texto = 'Negociações apagadas com sucesso!';
    }

    importaNegociacoes(){
        console.log('Importando negociações');
        this._service.obterNegociacoesDaSemana((err, negociacoes) => {
            if(err){
                this._mensagem._texto = 'Não foi possível obter as Negociações da semana!';
            }
            negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
            this._mensagem._texto = 'Negociações importadas com sucesso';
        });
    }

}