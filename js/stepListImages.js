const checkboxImages = [...document.querySelectorAll(".checkboxImage")]


function trocaDeImagem(formAtual) {

    if (formAtual == 'form01') {
        console.log(
            checkboxImages[0].src="https://cdn-icons-png.flaticon.com/512/10023/10023558.png ",
            checkboxImages[1].src="https://cdn-icons-png.flaticon.com/512/10023/10023558.png ",
            checkboxImages[2].src="https://cdn-icons-png.flaticon.com/512/10023/10023558.png ",
            checkboxImages[3].src="https://cdn-icons-png.flaticon.com/512/10023/10023558.png "
            );    
    } if (formAtual == 'form02') {
        console.log(
            checkboxImages[0].src="https://cdn-icons-png.flaticon.com/512/190/190411.png",
            checkboxImages[1].src="https://cdn-icons-png.flaticon.com/512/10023/10023558.png ",
            checkboxImages[2].src="https://cdn-icons-png.flaticon.com/512/10023/10023558.png ",
            checkboxImages[3].src="https://cdn-icons-png.flaticon.com/512/10023/10023558.png "
            );    
    } if (formAtual == 'form03') {
        console.log(
            checkboxImages[0].src="https://cdn-icons-png.flaticon.com/512/190/190411.png",
            checkboxImages[1].src="https://cdn-icons-png.flaticon.com/512/190/190411.png",
            checkboxImages[2].src="https://cdn-icons-png.flaticon.com/512/10023/10023558.png ",
            checkboxImages[3].src="https://cdn-icons-png.flaticon.com/512/10023/10023558.png "
        ); 
    } if (formAtual == 'form04') {
        console.log(
            checkboxImages[0].src="https://cdn-icons-png.flaticon.com/512/190/190411.png",
            checkboxImages[1].src="https://cdn-icons-png.flaticon.com/512/190/190411.png",
            checkboxImages[2].src="https://cdn-icons-png.flaticon.com/512/190/190411.png",
            checkboxImages[3].src="https://cdn-icons-png.flaticon.com/512/10023/10023558.png "
        ); 
    } if (formAtual == 'form05') {
        console.log(
            checkboxImages[0].src="https://cdn-icons-png.flaticon.com/512/190/190411.png ",
            checkboxImages[1].src="https://cdn-icons-png.flaticon.com/512/190/190411.png  ",
            checkboxImages[2].src="https://cdn-icons-png.flaticon.com/512/190/190411.png ",
            checkboxImages[3].src="https://cdn-icons-png.flaticon.com/512/190/190411.png "
        ); 
    }   
}

/* SE FORM ATUAL = 1
    TODOS OS CHECK COM NÃO CHECK
SE FORM ATUAL = 2
    CHECK 1 = CHECK VERDE
SE FORM ATUAL = 3
    CHECK 1 E 2 = CHECK VERDE
SE FORM ATUAL = 4 
    CHECK 1, 2 E 3 = CHECK VERDE
SE FORM ATUAL = 5
    CHECK 1,2,3 E 5 = CHECK VERDE

FAZER O SRC DA IMG RECEBER O VALOR PARA CADA IF 
*/