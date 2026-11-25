import type { Cliente } from "../Cliente";
import type { CanalNotificacao } from "../interfaces/CanalNotificacao";

export class SMS implements CanalNotificacao {

    enviar(cliente: Cliente, mensagem: string): void {
        console.log(`SMS para ${cliente.getNome()}: ${mensagem}`);
    }
}