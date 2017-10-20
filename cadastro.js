var botaoCadastro = document.getElementById("botao-cadastro");
var fundoCadastro = document.getElementById("fundo-cadastro");
var fecharCadastro = document.getElementById("botao-fechar-cadastro");

botaoCadastro.onclick = function () {
    // console.log("cliquei");
    fundoCadastro.classList.add("visivel");
}
fecharCadastro.onclick = function () {
    fundoCadastro.classList.remove("visivel");
}

fundoCadastro.onclick = function (event) {
    // console.log(e);
    if (event.target == fundoCadastro) {
        fundoCadastro.classList.remove("visivel");
    }
}

var formCadastro = fundoCadastro.querySelector('form'); // vou informar que eu quero um formulário específico
formCadastro.onsubmit = function (e) {
    //seleciona inputs
    var emailCadastro = document.querySelector("#email-cadastro")
    var senhaCadastro = document.querySelector("#senha-cadastro")

    //seleciona modal
    var modalCadastro = document.querySelector("#modal-cadastro")
    var usuarios = JSON.parse(localStorage.usuarios || "[]");

    usuarios.push({
        email: emailCadastro.value,
        senha: senhaCadastro.value,
    });

    localStorage.usuarios = JSON.stringify(usuarios);
    // localStorage.email = emailCadastro.value;
    // localStorage.senha = senhaCadastro.value;
    
    alert("Cadastro Realizado");

     
}


