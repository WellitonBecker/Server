class NegociacaoController {

    constructor(){
        const $ = document.querySelector.bind(document);
        const self = this;

        this._inputData = $('#data');
        this._inputQtde = $('#quantidade');
        this._inputValor = $('#valor');
        // this._negociacoes = new Negociacoes(this, (model) => this._negociacoesView.update(model));
        this._negociacoes = new Proxy(new Negociacoes(), {
            get(target, prop, receiver){
                if(typeof(target[prop]) == typeof (Function) && ['adiciona', 'esvazia'].includes(prop)){
                    return () => {
                        target[prop].apply(target, arguments);
                        self._negociacoesView.update(target);
                    }
                } else {
                    return target[prop];
                }
            },
            set(target, prop, value, receiver){
                return Reflect.set(target, prop, value);
            }
        })
        this._negociacoesView = new NegociacoesView('#negociacoes');

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView('#mensagemView');
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();

        this._negociacoes.adiciona(this._criaNegociacao());
        this._mensagem._texto = 'Negociação adicionada com sucesso!';

        this._mensagemView.update(this._mensagem);
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

    apaga(){
        this._negociacoes.esvazia();
        this._mensagem._texto = 'Negociações apagadas com sucesso!';
        this._mensagemView.update(this._mensagem);
    }

}