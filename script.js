let quantidade;
let gifs = ["bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"];
let embaralhar = [];

while (quantidade % 2 !== 0 || quantidade > 14 || quantidade < 4) {
    quantidade = Number(prompt("Com quantas cartas você quer jogar? (Escolha um número par entre 4 e 14)"));
}

for (index = 0; index < (quantidade / 2); index++) {
    embaralhar.push(gifs[index]);
    embaralhar.push(gifs[index]);
}

function comparador() {
    return Math.random() - 0.5;
}

embaralhar.sort(comparador);

for (index = 0; index < quantidade; index++) {
    const listaembaralhada =
        `
    <li class="card" id="${embaralhar[index]}" onclick="virarCartas(this)">
        <img class="front-face face" src="./imgens/${embaralhar[index]}parrot.gif">
        <img class="back-face face" src="./imgens/front.png">
    </li>
    ` ;

    document.querySelector('ul').innerHTML += listaembaralhada;
}

let firstCard;
let secondCard;
let contadorJogadas = 0;
let contadorPares = 0;

function virarCartas(elemento) {
    document.querySelectorAll(".card");
    elemento.classList.add("flip");

    if (firstCard == undefined) {
        firstCard = elemento;
    } else {
        secondCard = elemento;
    }

    comparar();
}

function comparar() {
    if (firstCard.id !== secondCard.id) {
        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            firstCard = undefined;
            secondCard = undefined;
        }, 1000);
        contadorJogadas+=2;
    } else {
        firstCard = undefined;
        secondCard = undefined;
        contadorJogadas+=2;
        contadorPares++;
    }

    if (contadorPares == (quantidade / 2)) {
        setTimeout(() => {
        alert(`Você ganhou em ${contadorJogadas} jogadas!`)}, 1000);
    }
}














