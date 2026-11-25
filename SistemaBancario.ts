import type { Conta } from "./Conta";

export class SistemaBancario {

    realizarSaque(conta: Conta, valor: number): void {

        try {

            conta.sacar(valor);

        } catch (erro: unknown) {

            if (erro instanceof Error) {

                console.log(`Erro: ${erro.message}`);

                const cliente = conta.getTitular();

                cliente.notificar(erro.message);
            }
        }
    }
}