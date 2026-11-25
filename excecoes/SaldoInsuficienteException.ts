export class SaldoInsuficienteException extends Error {

    constructor(public valorFaltante: number) {
        super(`Saldo insuficiente. Faltam R$ ${valorFaltante.toFixed(2)}.`);
        this.name = "SaldoInsuficienteException";
    }
}