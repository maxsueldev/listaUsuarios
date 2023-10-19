async function listaUsuarios() {
    const conexao = await fetch('http://localhost:3000/usuarios');
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaUsuario(nome, idade, email, login, foto) {
    const conexao = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            idade: idade,
            email: email,
            login: login,
            foto: foto
        })
    });

    if(!conexao.ok) {
        throw new Error('O usuário não pôde ser criado');
    }

    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}

export const conectaApi = { listaUsuarios, criaUsuario };