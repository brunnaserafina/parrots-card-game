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
    <li class="card" onclick="virarCartas(this)">
        <img class="front-face face" src="./imgens/${embaralhar[index]}parrot.gif">
        <img class="back-face face" src="./imgens/front.png">
    </li>
    ` ;

    document.querySelector('ul').innerHTML += listaembaralhada;
}

let primeiraCarta;
let segundaCarta;
let contadorJogadas = 0;
let contadorPares = 0;
let bloquearCartas = false;

function virarCartas(elemento) {
    if(bloquearCartas){
        return false;
    }

    document.querySelectorAll(".card");
    elemento.classList.add("flip");

    if (primeiraCarta == undefined) {
        primeiraCarta = elemento;
    } else {
        segundaCarta = elemento;
        comparar();
    }
}

function comparar() {
    bloquearCartas = true;
    if (primeiraCarta.innerHTML !== segundaCarta.innerHTML) {
        setTimeout(() => {
            primeiraCarta.classList.remove("flip");
            segundaCarta.classList.remove("flip");
            primeiraCarta = undefined;
            segundaCarta = undefined;
            bloquearCartas = false;
        }, 1000);
    } else {
        primeiraCarta = undefined;
        segundaCarta = undefined;
        bloquearCartas = false;
        contadorPares++;
    }

    contadorJogadas+=2;

    if (contadorPares === (quantidade / 2)) {
        setTimeout(() => {
            alert(`Você ganhou em ${contadorJogadas} jogadas!`)
        }, 1000);
    }
}

















