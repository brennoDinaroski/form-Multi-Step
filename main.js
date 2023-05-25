// const buttonNext01 = document.querySelector("[data-next01]")
const buttonsNext = document.querySelectorAll('.buttonNext')
const form01 = document.getElementById("form01")
const form02 = document.getElementById("form02")

let contadorDeStep = 1;
let formProxima = null;

buttonsNext.forEach(button => {
    button.addEventListener('click', clicarBotaoNext);
});

function clicarBotaoNext(event) {
    event.preventDefault(); 
    console.log('Botao next clicado');
    
    contadorDeStep = contadorMais(contadorDeStep);  
    console.log('contador de Step é: ', contadorDeStep); 
    
    formProxima = `form0${contadorDeStep}`
    console.log('formProxima é: ', formProxima);
    
    
    colocaApareceNoForm(formProxima);   
    
    formAtual = `form0${contadorDeStep-1}`
    console.log('a form atual é: ', formAtual);

    limparClasseApareceNoForm(formAtual); 
};

function armazenaContadorDeStep(contadorDeStep) {
    const contadorDeStepArmazenado = contadorDeStep;
    return contadorDeStepArmazenado;
}

function contadorMais(i) {
    i++
    return i;
}

function colocaApareceNoForm (formProxima) {    
    const formProximaConst = document.getElementById(formProxima)    
    formProximaConst.classList.add("aparece");
};

function limparClasseApareceNoForm(formAtual) {
    const formAtualConst = document.getElementById(formAtual)
    console.log('limparClasseAparece na ', formAtualConst);
    formAtualConst.classList.remove("aparece");
}



