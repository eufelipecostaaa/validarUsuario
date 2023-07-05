document.addEventListener("DOMContentLoaded", function () {
    //verifica se o usuario esta logado
    const usuarioJSON = sessionStorage.getItem("usuario");

    if (usuarioJSON) {
        //se o usuario estiver logado ele exibe a mensagem de boas vindas
        const usuario = JSON.parse(usuarioJSON);
        const mensagemElement = document.getElementById("mensagem");
        mensagemElement.textContent = "Bem-vindo, " + usuario.name;
    } else {
        //se o usuario nao estiver logado ele redireciona para a tela de login
        window.location.href = "login.html"
    }

    //botao de sair
    const botaoSair = document.getElementById("botao-sair");
        botaoSair.addEventListener("click", function() {
        //remove usuario da sessao
        sessionStorage.removeItem("usuario");
        //redireciona para a tela de login
        window.location.href = "login.html"
    });
});