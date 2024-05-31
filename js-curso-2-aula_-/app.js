let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto =  numeroGeradoAleatorio();

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let tentativas = 1;

function textosNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemTela(){
textosNaTela("h1","Jogo do número Secreto");
textosNaTela("p", "escolha um número de 1 a 10");
}

exibirMensagemTela();

function numeroGeradoAleatorio(){
    let numeroEscolhido = parseInt (Math.random() *numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroGeradoAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function verificaChute(){
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        textosNaTela("h1","parabéns");
                let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
                let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
                textosNaTela ("p", mensagemTentativas);

                document.getElementById("reiniciar").removeAttribute("disabled");
    } else { 
             if (chute > numeroSecreto) {
                    textosNaTela("p", "o número secreto é menor");
           }   else {
                     textosNaTela("p", "o número secreto é maior");
                     
           }
           tentativas++
           limparCampo();
        }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value ="";
}

function reiniciaJogo(){
    numeroSecreto = numeroGeradoAleatorio();
    limparCampo();
    tentativas = 1; 
    exibirMensagemTela();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
   
   





// botão reniciar habilitar e dar função a ele 