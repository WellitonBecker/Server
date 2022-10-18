class DateConverter {

    constructor() {
        throw new Error("Esta classe não pode ser instânciada");
    }

    static paraTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static paraData(texto) {
        return new Date(...texto.split('-').map((item, indice) => item - (indice % 2)));
    }
}