let numeroSecreto = gerarNumeroAleaatorio;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}


exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou')
        exibirTextoNaTela('p', Você descobriu o número numeroSecreto, parabéns! )
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número sevreto é maior')
        } else if (chute < numeroSecreto)  {
            exibirTextoNaTela('p', 'O número secreto é 10')
        }
    }
}


