
let quantidade = Number(prompt("Com quantas cartas você quer jogar? (Escolha um número par entre 4 e 14)"));

const carta = `
<li class="carta-escondida">
<img src="./imgens/front.png">
</li> `;


while(quantidade%2 !== 0 || quantidade > 14 || quantidade < 4) {
    quantidade = Number(prompt("Quantidade de cartas: "));
}

let contador = 0;

while(contador < quantidade){
    document.querySelector('ul').innerHTML += carta;
    contador++;
}




