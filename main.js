// const buttonNext01 = document.querySelector("[data-next01]")
const nameField = document.getElementById("name")
const emailField = document.getElementById("email")
const phoneNumberField = document.getElementById("phoneNumber")
const buttonsNext = document.querySelectorAll('.buttonNext')
const buttonsPrevious = document.querySelectorAll('.buttonPrevious')

let contadorDeStep = 1;
let formAnterior = 'form00';
let formAtual = 'form01';
let formProxima = 'form02';
let formsArray = []

buttonsNext.forEach(button => {
    button.addEventListener('click', clicarBotaoNext);
});

function clicarBotaoNext(event) {
    event.preventDefault(); 
    
    //check form validity (all fields are filled)  

    console.log('Botao next clicado');       
    
    if(!emailField.checkValidity() || !nameField.checkValidity() || !phoneNumber.checkValidity()) {
        console.log('email not filled');
    } else {
        contadorDeStep++;      

        formAnterior = `form0${contadorDeStep-1}`   
        formAtual = `form0${contadorDeStep}`
        formProxima = `form0${contadorDeStep+1}`

        console.log('email filled');
        
        console.log(
            'form anterior: ', formAnterior,
            'form atual: ', formAtual,
            'form proxima: ', formProxima,
            'contador de step', contadorDeStep,
            );
            
            colocaApareceNoForm(formAtual);   
            limparClasseApareceNoForm(formAnterior);       
        } 
};

buttonsPrevious.forEach ( button => {
    button.addEventListener('click', clicarBotaoPrevious);
});

function clicarBotaoPrevious (event) {
    event.preventDefault();   
    // atualizaNumeracaoDosForms(contadorDeStep)    
    
    formAnterior = `form0${contadorDeStep-1}`   
    formAtual = `form0${contadorDeStep}`
    formProxima = `form0${contadorDeStep+1}`    
    
    colocaApareceNoForm(formAnterior);
    limparClasseApareceNoForm(formAtual);
    
    contadorDeStep--

    formAnterior = `form0${contadorDeStep-1}`   
    formAtual = `form0${contadorDeStep}`
    formProxima = `form0${contadorDeStep+1}`    
}

//MONTAR FUNÇÃO PARA ARRUMAR TODOS OS FORMS
//E SÓ CHAMA-LA NAS FUNÇÕES DE CLICK DOS BOTOES NEXT E PREVIOUS
/* function atualizaNumeracaoDosForms(contadorDeStep) {
    formAnterior = `form0${contadorDeStep-1}`   
    formAtual = `form0${contadorDeStep}`
    formProxima = `form0${contadorDeStep+1}`

    formsArray = [
        formAnterior, 
        formAtual,
        formProxima    
    ]

    return formsArray;
} */


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