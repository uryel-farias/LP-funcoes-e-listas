let numeroSecreto = gerarNumeroAleatorio();
let numeroDeTentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1)
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou')
        let palavraTentativa = numeroDeTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número Secreto com ${numeroDeTentativas} ${palavraTentativa}, parabéns!`
        exibirTextoNaTela('p', mensagemTentativas )
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número sevreto é menor')
        } else if (chute < numeroSecreto)  {
            exibirTextoNaTela('p', 'O número secreto é maior')
        }
        tentativas++;
    }
}


