import type { Cliente } from "../Cliente";

export interface CanalNotificacao {
    enviar(cliente: Cliente, mensagem: string): void;
}