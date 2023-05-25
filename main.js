// const buttonNext01 = document.querySelector("[data-next01]")
const buttonsNext = document.querySelectorAll('.buttonNext')
const buttonsPrevious = document.querySelectorAll('.buttonPrevious')
const form01 = document.getElementById("form01")
const form02 = document.getElementById("form02")

let contadorDeStep = 1;
let formProxima = null;
let formAtual = null;

buttonsNext.forEach(button => {
    button.addEventListener('click', clicarBotaoNext);
});

function clicarBotaoNext(event) {
    event.preventDefault(); 
    console.log('Botao next clicado');
    
    contadorDeStep++;      

    formAnterior = `form0${contadorDeStep-1}`   
    formAtual = `form0${contadorDeStep}`
    formProxima = `form0${contadorDeStep+1}`

    console.log(
        'form atual: ', formAtual,
        'form proxima: ', formProxima,
        'contador de step', contadorDeStep,
    );

    colocaApareceNoForm(formAtual);   
    limparClasseApareceNoForm(formAnterior);       
};

function armazenaContadorDeStep(contadorDeStep) {
    const contadorDeStepArmazenado = contadorDeStep;
    return contadorDeStepArmazenado;
}

function colocaApareceNoForm (formAtual) {    
    const formAtualConst = document.getElementById(formAtual)    
    formAtualConst.classList.add("aparece");
};

function limparClasseApareceNoForm(formAnterior) {
    const formAnteriorConst = document.getElementById(formAnterior)
    console.log('limparClasseAparece na ', formAnteriorConst);
    formAnteriorConst.classList.remove("aparece");
}

buttonsPrevious.forEach(button => {
    button.addEventListener('click', clicarBotaoPrevious);
});

function clicarBotaoPrevious (event) {
    event.preventDefault();
    console.log('cliquei Previous');
    
    colocaApareceNoForm(formAtual);    
    
    contadorDeStep = contadorDeStep -1    
    formAtual = `form0${contadorDeStep}`  
    
    contadorDeStep--;  
    console.log('contador de Step é: ', contadorDeStep); 
    
    formProxima = `form0${contadorDeStep}`
    console.log('formProxima é: ', formProxima);


    console.log('form proxima ANTERIOR: ', formProxima);
    limparClasseApareceNoForm(formProxima);
    console.log('form proxima POSTERIOR: ', formProxima);
}




