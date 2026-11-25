import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { SistemaBancario } from "./SistemaBancario";

import { SMS } from "./notificacoes/SMS";
import { Email } from "./notificacoes/Email";
import { Aplicativo } from "./notificacoes/Aplicativo";

import type { CanalNotificacao } from "./interfaces/CanalNotificacao";

const banco = new SistemaBancario();

// Função para criar clientes e contas
function criarConta(
    nome: string,
    canal: CanalNotificacao,
    saldo: number,
    limite: number,
    bloqueada: boolean = false
): Conta {

    const cliente = new Cliente(
        nome,
        "12345678900",
        "Rua das Flores",
        3000,
        canal
    );

    return new Conta(
        cliente,
        "001",
        "1234",
        new Date(),
        saldo,
        limite,
        bloqueada
    );
}

// 1. VALOR INVÁLIDO

console.log("\n--- VALOR INVÁLIDO ---");

const conta1 = criarConta("João", new SMS(), 500, 300);
const conta2 = criarConta("Maria", new Email(), 500, 300);

banco.realizarSaque(conta1, -50);
banco.realizarSaque(conta2, 0);


// 2. CONTA BLOQUEADA

console.log("\n--- CONTA BLOQUEADA ---");

const conta3 = criarConta("Pedro", new Aplicativo(), 500, 300, true);
const conta4 = criarConta("Ana", new SMS(), 800, 300, true);

banco.realizarSaque(conta3, 100);
banco.realizarSaque(conta4, 200);


// 3. SALDO INSUFICIENTE

console.log("\n--- SALDO INSUFICIENTE ---");

const conta5 = criarConta("Carlos", new Email(), 100, 300);
const conta6 = criarConta("Julia", new Aplicativo(), 200, 300);

banco.realizarSaque(conta5, 150);
banco.realizarSaque(conta6, 250);


// 4. LIMITE DIÁRIO EXCEDIDO

console.log("\n--- LIMITE DIÁRIO ---");

const conta7 = criarConta("Lucas", new SMS(), 1000, 100);
const conta8 = criarConta("Mariana", new Email(), 1000, 100);

banco.realizarSaque(conta7, 80);
banco.realizarSaque(conta8, 80);

banco.realizarSaque(conta7, 30);
banco.realizarSaque(conta8, 30);


// 5. SAQUES REALIZADOS COM SUCESSO

console.log("\n--- SAQUES REALIZADOS ---");

const conta9 = criarConta("Roberto", new SMS(), 500, 300);
const conta10 = criarConta("Fernanda", new Aplicativo(), 800, 500);

banco.realizarSaque(conta9, 100);
banco.realizarSaque(conta10, 200);


// 6. DEPÓSITOS E CONSULTAS

console.log("\n--- DEPÓSITOS E CONSULTAS ---");

conta9.depositar(200);
conta10.depositar(300);

console.log("Saldo Roberto:", conta9.consultarSaldo());
console.log("Saldo Fernanda:", conta10.consultarSaldo());