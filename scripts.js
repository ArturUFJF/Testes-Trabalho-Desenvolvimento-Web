const celulas = document.querySelectorAll("[data-cell]");
const tabuleiro = document.querySelector("[data-board]");

function intervaloNumRandom(a, b)
{
    return Math.floor(Math.random() * (b - a + 1)) + a
}

let valorMin = 1;
let valorMax = 6;

let vezJogador = false;

let qualDado = intervaloNumRandom(valorMin, valorMax);

console.log(qualDado);

const mudaVez = () =>{
    vezJogador = !vezJogador;

    if(qualDado === 1){
        tabuleiro.classList.add("d1");
    } else if (qualDado === 2){
        tabuleiro.classList.add("d2");
    } else if (qualDado === 3){
        tabuleiro.classList.add("d3");
    } else if (qualDado === 4){
        tabuleiro.classList.add("d4");
    } else if (qualDado === 5){
       tabuleiro.classList.add("d5");;
    }else if (qualDado === 6){
        tabuleiro.classList.add("d6");
    }
}

tabuleiro.classList.remove("d1");
tabuleiro.classList.remove("d2");
tabuleiro.classList.remove("d3");
tabuleiro.classList.remove("d4");
tabuleiro.classList.remove("d5");
tabuleiro.classList.remove("d6"); 

const clicarColuna = (x) => {
    // Botar o dado
    const cell = x.target;
    let dadoSerAdicionado = intervaloNumRandom(valorMin, valorMax);

    if(dadoSerAdicionado === 1){
        dadoSerAdicionado = "d1";
    }
    else if (dadoSerAdicionado === 2){
        dadoSerAdicionado = "d2";
    }
    else if (dadoSerAdicionado === 3){
        dadoSerAdicionado = "d3";
    }
    else if (dadoSerAdicionado === 4){
        dadoSerAdicionado = "d4";
    }
    else if (dadoSerAdicionado === 5){
        dadoSerAdicionado = "d5";
    }
    else if (dadoSerAdicionado === 6){
        dadoSerAdicionado = "d6";
    }
    
    cell.classList.add(dadoSerAdicionado);

    // Mudar vez
    mudaVez();

    // Verificar tabela cheia
}

for (const cell of celulas){
    cell.addEventListener('click', clicarColuna, {once: true});
}