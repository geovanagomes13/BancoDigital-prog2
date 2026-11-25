export class LimiteDiarioExcedidoException extends Error {

    constructor() {
        super("Limite diário de saque excedido.");
        this.name = "LimiteDiarioExcedidoException";
    }
}