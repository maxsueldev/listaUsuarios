import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector('[data-formulario]');

async function criarUsuario(evento) {
    evento.preventDefault();

    const nome = document.querySelector('[data-nome]').value;
    const idade = document.querySelector('[data-idade]').value;
    const email = document.querySelector('[data-email]').value;
    const login = document.querySelector('[data-login]').value;
    const foto = document.querySelector('[data-foto]').value;

    try {
        await conectaApi.criaUsuario(nome, idade, email, login, foto);
        window.location.href = '../index.html';
    } catch(erro) {
        alert(erro);
    }
}

formulario.addEventListener('submit', evento => criarUsuario(evento));