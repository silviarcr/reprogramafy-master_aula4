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


//formulario login
var formulario = document.querySelector("form"); // vou informar que eu quero um formulário específico
formulario.onsubmit = function () {
    var email = document.getElementById("email");
    var senha = document.querySelector("#senha");

    //seleciona modal do login
    var modal = document.querySelector("#modal");
    var usuarios = JSON.parse(localStorage.usuarios);

    //verifica se o email e senha sao permitidos
    var correto; //teste de email e senha se estao cadastrado
    
    for(var i =0; i < usuarios.length; i++){
        if( usuarios[i].email == email.value && usuarios[i].senha === senha.value){
                correto = true;
                localStorage.usuario = usuarios[i].email;
                break;
        }
    }
    
    if(!correto) {
        //adiciona classe de erro na modal pra mostrar um feedback
         alert("Email ou Senha errados");
         modal.classList.add("erro");

          setTimeout(function () {
             modal.classList.remove("erro");
         }, 1000);  /*1000 = 1s */
        
         return false;
    }
}

     //localStorage.usuario = email.value;
    //nao precisa mais esse teste
    // //  if (email.value !== "oi@oi" || senha.value !== "oi") {
    // if (email.value !== localStorage.email || senha.value !== localStorage.senha) {
    //     alert("Email ou Senha errados");
    //     modal.classList.add("erro");

    //     setTimeout(function () {
    //         modal.classList.remove("erro");
    //     }, 1000);  /*1000 = 1s */
    //     return false;
    // }
   


// return false = vai para a página do action dentro do form;     

