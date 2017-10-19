var audio = document.querySelector('audio');
var botaoPlay = document.querySelector ('.botao-play');

botaoPlay.onclick = function() {
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}


// OLHAR SE ESTÁ FUNCIONANDO NO CONSOLE
audio.onplay = function() {
    console.log('DEU PLAY!!!');
}
audio.onpause = function() { 
    console.log('DEU PAUSE!!!');
}


// PARA DEIXAR A BARRA CORRENDO COM O TEMPO

audio.ontimeupdate = function() {
    var porcentagem = (audio.currentTime / audio.duration) * 100;
    var tocado = document.querySelector(".tocado");
        tocado.style.width = porcentagem + "%";
        console.log(audio.currentTime);

    var duracaoAtual = Math.round(audio.currentTime);
    var spanTempoAtual = document.querySelector('.tempo-atual');
        spanTempoAtual.innerText = duracaoAtual;

// CONVERTER MINUTOS E SEGUNDOS

    var data = new Date (2017, 0, 1);
    data.setSeconds(duracaoAtual);

    spanTempoAtual.innerText = 
    data.getMinutes().toString().padStart(2, '0')
    + ':' 
    + data.getSeconds().toString().padStart(2, '0');
}

audio.onloadeddata = function() {


}

