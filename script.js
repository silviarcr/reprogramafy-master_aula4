var botao = document.getElementById("botao");
var fundo = document.getElementById("fundo");
var fechar = document.getElementById("fechar");

//onclick: quando alguém clicar no botão, vou executar uma determinada função; serve para saber se está funcionando o clique;
botao.onclick = function () {
    // console.log("cliquei");
    fundo.classList.add("visivel");
}

fechar.onclick = function () {
    fundo.classList.remove("visivel");
}

fundo.onclick = function (event) {
    // console.log(e);
    if (event.target == fundo) {
        fundo.classList.remove("visivel");
    }
}


// document.querySelector('#botao') <--quando for classe, coloca .botao para chamar no js;
// console.log(botao); <--testar o que tiver errado na class;


//login

var email = document.getElementById("email");


var senha = document.querySelector("#senha");

var formulario = document.querySelector("form"); // vou informar que eu quero um formulário específico
formulario.onsubmit = function () {
    if (email.value !== "admin@admin.com" || senha.value !== "admin") {
        alert("Email ou Senha errados");
        modal.classList.add("erro");

        setTimeout(function () {
            modal.classList.remove("erro");
        }, 1000);  /*1000 = 1s */
        return false;
    }

    localStorage.usuario = email.value;
}


// return false = vai para a página do action dentro do form;     

