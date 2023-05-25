const buttonNext01 = document.querySelector("[data-next01]")
const form01 = document.getElementById("form01")
const form02 = document.getElementById("form02")

let contadorDeStep = 1;
let formProxima = null;

buttonNext01.addEventListener('click', (event) => {
    event.preventDefault();     

    //quando clicar no next, limpe a palavra 'aparecer' a classList do formulario Atual   

    contadorDeStep = contadorMais(contadorDeStep);   

    formProxima = `form0${contadorDeStep}`
    console.log('formProxima é: ', formProxima);

    // limparClasseApareceNoForm1(); 

    colocaApareceNoForm(formProxima);   
});

function armazenaContadorDeStep(contadorDeStep) {
    const contadorDeStepArmazenado = contadorDeStep;
    return contadorDeStepArmazenado;
}

function contadorMais(i) {
    i++
    return i;
}

function limparClasseApareceNoForm1() {
    console.log('limparClasseApareceNoForm1');
    form01.classList.remove("aparece");
}

function colocaApareceNoForm (formProxima) {    
    const formProximaConst = document.getElementById(formProxima)    
    formProximaConst.classList.add("aparece");
};



