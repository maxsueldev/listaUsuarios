import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector('[data-lista]');

function constroiCard(nome, idade, email, login, foto) {
    const li = document.createElement("li");
    li.innerHTML = `
        <div class="container-photo">
            <img src="${foto}" alt="Foto de perfil" width="85px" height="85px">
        </div>
        <div class="container-infos">
            <p class="name">${nome}</p>
            <p class="age">${idade} anos</p>
            <p class="mail">${email}</p>
            <p class="login">${login}</p>
        </div>
    `;
    return li;
}

async function listaUsuario() {
    try {
        const listaApi = await conectaApi.listaUsuarios();

        listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.idade, elemento.email, elemento.login, elemento.foto)));
    } catch {
        lista.innerHTML = `<h2>Não foi possível carregar a lista de usuários no momento. Entre em contato com a equipe de desenvolvimento</h2>`;
    }
}

listaUsuario();