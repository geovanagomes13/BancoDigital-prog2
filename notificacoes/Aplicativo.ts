import type { Cliente } from "../Cliente";
import type { CanalNotificacao } from "../interfaces/CanalNotificacao";

export class Aplicativo implements CanalNotificacao {

    enviar(cliente: Cliente, mensagem: string): void {
        console.log(`Notificação no aplicativo de ${cliente.getNome()}: ${mensagem}`);
    }
}