
let numeroSecreto = gerarNumAlea();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10")

function gerarNumAlea(){
   return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}



function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagemTentativas );
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela ("p", "O número secretro é menor");
        }else {
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }   
}

function reiniciarJogo(){
    numeroSecreto;
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10")
}