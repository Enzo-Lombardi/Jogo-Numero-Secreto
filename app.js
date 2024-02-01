let listaNumero = [];
let quantidadesNumeros = 10;
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(teg, texto) {
    let campo = document.querySelector(teg);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Portuguese Female", {rate: 1.2});
}

function mensagemTela() {
    exibirTextoNaTela ("h1", "Jogo do número secreto");
    exibirTextoNaTela ("p", "Escolha um número entre 1 e 100");
}

mensagemTela();

function verificaChute() {
    let chute = document.getElementById("input-do-chute").value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentatias = `Você descobrio o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagemTentatias);
        document.getElementById("reiniciar").removeAttribute("disaled");
        document.getElementById("chutar").setAttribute("disabled", btrue)
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor");
        } else {
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        tentativas++;
        limpaInput();
    }
}

function geraNumeroAleatorio() {
    let numeroEscolido = parseInt(Math.random() * quantidadesNumeros + 1);

    if (listaNumero.length == quantidadesNumeros) {
        listaNumero = [];
    }
    
    if (listaNumero.includes(numeroEscolido)) {
        return geraNumeroAleatorio();
    } else {
        listaNumero.push(numeroEscolido);
        return numeroEscolido;
     }
 }

function limpaInput() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciaJogo() {
    numeroSecreto = geraNumeroAleatorio();
    tentativas = 1;
    limpaInput();
    mensagemTela();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("chutar").removeAttribute("disabled");
}