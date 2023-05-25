// const buttonNext01 = document.querySelector("[data-next01]")
const buttonsNext = document.querySelectorAll('.buttonNext')
const buttonsPrevious = document.querySelectorAll('.buttonPrevious')

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
        'form anterior: ', formAnterior,
        'form atual: ', formAtual,
        'form proxima: ', formProxima,
        'contador de step', contadorDeStep,
    );

    colocaApareceNoForm(formAtual);   
    limparClasseApareceNoForm(formAnterior);       
};

buttonsPrevious.forEach ( button => {
    button.addEventListener('click', clicarBotaoPrevious);
});

function clicarBotaoPrevious (event) {
    event.preventDefault();   
    
    formAnterior = `form0${contadorDeStep-1}`   
    formAtual = `form0${contadorDeStep}`
    formProxima = `form0${contadorDeStep+1}`
    
    contadorDeStep--       

    colocaApareceNoForm(formAnterior);
    limparClasseApareceNoForm(formAtual);
}

//MONTAR FUNÇÃO PARA ARRUMAR TODOS OS FORMS
//E SÓ CHAMA-LA NAS FUNÇÕES DE CLICK DOS BOTOES NEXT E PREVIOUS
/*function atualizaNumeracaoDosForms(contadorDeStep) {
    formAnterior = `form0${contadorDeStep-1}`   
    formAtual = `form0${contadorDeStep}`
    formProxima = `form0${contadorDeStep+1}`

    return (formAnterior, formAtual, formProxima);
}*/


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