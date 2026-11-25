import type { Cliente } from "../Cliente";
import type { CanalNotificacao } from "../interfaces/CanalNotificacao";

export class Email implements CanalNotificacao {

    enviar(cliente: Cliente, mensagem: string): void {
        console.log(`E-mail para ${cliente.getNome()}: ${mensagem}`);
    }
}