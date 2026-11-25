export class ValorInvalidoException extends Error {

    constructor() {
        super("Valor inválido para operação.");
        this.name = "ValorInvalidoException";
    }
}