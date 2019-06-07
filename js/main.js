
/*
    // Preços
    Ambientes: 
        Garden = 300 R$
        Village = 180 R$
        Lounge = 250 R$
    Festa = 300 R$
    Baile = 350 R$
    Cardápios:
        Soft = 300 R$
        Plus = 400 R$
        Premium = 600 R$
    Preço por pessoa = 100 R$
*/


function verPersonalizado() {

    var valorTotal = 0;
    var garden = document.getElementById("garden").checked;
    var village = document.getElementById("village").checked;
    var lounge = document.getElementById("lounge").checked;
    var fotografo = document.getElementById("fotografo").checked;
    var festa = document.getElementById("festa").checked;
    var baile = document.getElementById("baile").checked;
    var cardapio_soft = document.getElementById("cardapio-soft").checked;
    var cardapio_plus = document.getElementById("cardapio-plus").checked;
    var cardapio_premium = document.getElementById("cardapio-premium").checked;
    var qpessoas = document.getElementById("qpessoas");


    if(garden == true) {
        valorTotal += 300;
    }if(village == true) {
        valorTotal += 180;
    }if(lounge == true){
        valorTotal += 250;
    }if(festa == true) {
        valorTotal += 300;
    }if(baile == true) {
        valorTotal += 350;
    }if(cardapio_soft == true) {
        valorTotal += 300;
    }if(cardapio_plus == true) {
        valorTotal += 400;
    }if(cardapio_premium == true) {
        valorTotal += 600;
    }

    if(qpessoas.value > 500)
        alert(" A QUANTIDADE DE PESSOAS DEVE SER MENOR OU IGUAL A 500!");
    else
        valorTotal += (qpessoas.value * 100);

    document.querySelector("#valorTotal").innerHTML = "VALOR TOTAL: " + valorTotal;
}

function verSoft() {
    var cardapio_soft = true;
    var garden = true;
    var village = true;
    var lounge = true;
    var festa = true;
    var baile = true;
    var qpessoas = 200;
    var valorTotal = (qpessoas * 100);
    document.querySelector("#valorTotal").innerHTML = "VALOR TOTAL: " + valorTotal;
}

function verPlus() {
    var cardapio_soft = true;
    var garden = true;
    var village = true;
    var lounge = true;
    var festa = true;
    var baile = true;
    var qpessoas = 300;
    var valorTotal = (qpessoas * 100);
    document.querySelector("#valorTotal").innerHTML = "VALOR TOTAL: " + valorTotal;
}

function verPremium() {
    var cardapio_soft = true;
    var garden = true;
    var village = true;
    var lounge = true;
    var festa = true;
    var baile = true;
    var qpessoas = 500;
    var valorTotal = (qpessoas * 100);
    document.querySelector("#valorTotal").innerHTML = "VALOR TOTAL: " + valorTotal;
}
