import type { Conta } from "./Conta";
import type { CanalNotificacao } from "./interfaces/CanalNotificacao";

export class Cliente {

    private contas: Conta[] = [];

    constructor(
        private nome: string,
        private cpf: string,
        private endereco: string,
        private renda: number,
        private canal: CanalNotificacao
    ) {}

    adicionarConta(conta: Conta): void {
        this.contas.push(conta);
    }

    getNome(): string {
        return this.nome;
    }

    notificar(mensagem: string): void {
        this.canal.enviar(this, mensagem);
    }
}