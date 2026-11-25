import type { Cliente } from "./Cliente";

import { ValorInvalidoException } from "./excecoes/ValorInvalidoException";
import { ContaBloqueadaException } from "./excecoes/ContaBloqueadaException";
import { SaldoInsuficienteException } from "./excecoes/SaldoInsuficienteException";
import { LimiteDiarioExcedidoException } from "./excecoes/LimiteDiarioExcedidoException";

export class Conta {

    private totalSaquesDia: number = 0;
    private dataUltimoSaque: string = "";

    constructor(
        private titular: Cliente,
        private numero: string,
        private agencia: string,
        private dataAbertura: Date,
        private saldo: number,
        private limiteDiario: number,
        private bloqueada: boolean = false
    ) {
        titular.adicionarConta(this);
    }

    sacar(valor: number): void {

        if (!Number.isFinite(valor) || valor <= 0) {
            throw new ValorInvalidoException();
        }

        if (this.bloqueada) {
            throw new ContaBloqueadaException();
        }

        if (valor > this.saldo) {
            throw new SaldoInsuficienteException(valor - this.saldo);
        }

        const hoje = new Date().toLocaleDateString();

        if (this.dataUltimoSaque !== hoje) {
            this.totalSaquesDia = 0;
            this.dataUltimoSaque = hoje;
        }

        if (this.totalSaquesDia + valor > this.limiteDiario) {
            throw new LimiteDiarioExcedidoException();
        }

        this.saldo -= valor;
        this.totalSaquesDia += valor;

        console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
    }

    depositar(valor: number): void {

        if (!Number.isFinite(valor) || valor <= 0) {
            throw new ValorInvalidoException();
        }

        this.saldo += valor;

        console.log("Depósito realizado com sucesso!");
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    getTitular(): Cliente {
        return this.titular;
    }
}