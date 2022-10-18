class ProxyFactory {

    static create(objeto, props, armadilha){
        return new Proxy(objeto, {
            get(target, prop, receiver){
                if(ProxyFactory._ehFuncao(target[prop]) && ['adiciona', 'esvazia'].includes(prop)){
                    return () => {
                        target[prop].apply(target, arguments);
                        armadilha(target);
                    }
                } else {
                    return target[prop];
                }
            },
            set(target, prop, value, receiver){
                const updated = Reflect.set(target, prop, value);
                if(props.includes(prop)) armadilha(target0)
                return updated;
            }
        });
    }

    static _ehFuncao(fn){
        return typeof fn == typeof Function;
    }

}