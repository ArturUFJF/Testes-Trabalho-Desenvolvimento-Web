const celulas = document.querySelectorAll("[data-cell]");

function intervaloNumRandom(a, b)
{
    return Math.floor(Math.random() * (b - a + 1)) + a
}

let valorMin = 1;
let valorMax = 6;

let vezJogador = false;

let qualDado = intervaloNumRandom(valorMin,valorMax);


for (const cell of celulas){
    cell.addEventListener('click', clicarColuna, {once: true});
}

const clicarColuna = (c) => {
    // Botar o dado

    // Mudar vez
    
}