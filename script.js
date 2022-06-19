let quantidade;
let gifs = [
    "bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"
];
let embaralhar = [];

while (quantidade % 2 !== 0 || quantidade > 14 || quantidade < 4) {
    quantidade = Number(prompt("Com quantas cartas você quer jogar? (Escolha um número par entre 4 e 14)"));
}

for (index = 0; index < (quantidade / 2); index ++) {
    const papagaiosDancando = gifs[index];
    embaralhar.push(papagaiosDancando);
    embaralhar.push(papagaiosDancando);
}

embaralhar.sort(comparador);

function comparador() {
    return Math.random() - 0.5;
}

for (index = 0; index < quantidade; index ++){
    const listaembaralhada =
    `
    <li class="carta" onclick="virarCarta()">
        
        <img src="./imgens/${embaralhar[index]}.gif">
    </li>
    ` ;
    
    document.querySelector('ul').innerHTML += listaembaralhada; 
}















