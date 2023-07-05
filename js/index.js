const usuarios = [
  {
    id: 1,
    name: "Taynara Dutra",
    email: "taynara@ifpr.edu.br",
    senha: "12345",
  },
  {
    id: 2,
    name: "Fulano Silva",
    email: "fulano@gmail.com",
    senha: "12345",
  },
  {
    id: 3,
    name: "Fabiano Meira",
    email: "fabiano.meira@gmail.com",
    senha: "12345",
  },
];
//deve-se trabalhar com essa lista e converte-la para objetos.
const usuariosJSON = JSON.stringify(usuarios);

/* JSON.parse()*/
const listaUsuarios = JSON.parse(usuariosJSON);

let form = document.querySelector("#login-form");
let botaoLogar = document.querySelector("#form-botao");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //validar login e senha nulos.
  let email = document.querySelector("#email").value;
  let senha = document.querySelector("#senha").value;

  let usuarioEncontrado = listaUsuarios.find(usuario =>
    usuario.email.toUpperCase() === email.trim().toUpperCase() &&
    usuario.senha.toUpperCase() === senha.trim().toUpperCase()
  ); 
    if (usuarioEncontrado) {
      const usuarioJSON = JSON.stringify(usuarioEncontrado);
      sessionStorage.setItem("usuario", usuarioJSON);
      window.location.href = "bemvindo.html";
      //inserir aqui em JSon e inserir em sessionStorage
      //a opcao de cima TEM O <3 da prof
      //ou criar tres atributos na sessionStorage
    } else {
      alert("Email ou senha incorretos!");
      //alert ou igual do campo obrigatorio
      event.preventDefault();
    }
  });

//// ATIVIDADE

/// Passo a passo:

// 1) Quando a pessoa faz o login, deve-se validar login e senha não estão nulos.

// 2)  Se não estiverem, deve-se verificar se estão na lista dos dados.

// 3) Se estiver correta deve ser armazenado as informações do usuário (guardar um json do usuário (Não pode armazenar senha)) no localStorage.

// 4) Deve-se redirecionar  para uma nova página em que haverá um mensagem de "Bem-vind@ Fulano" e um botao de inserir.

// 5) Sempre que a página for recarrega (onload), deve-se validar a informação do usuário (verificar se existe um usuário na sessão).

// 6) Caso o usuário clique em sair, deve ser redirecionado para a página de login e removido do localStorage.
