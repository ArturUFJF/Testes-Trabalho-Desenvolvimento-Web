const celulas = document.querySelectorAll("[data-cell]");
const tabuleiro = document.querySelector("[data-board]");


function intervaloNumRandom(a, b)
{
    return Math.floor(Math.random() * (b - a + 1)) + a
}

// Array de classes de dado
let dados = ["d1", "d2", "d3", "d4", "d5", "d6"];

let valorMin = 1;
let valorMax = 6;

let vezJogador;

let prox;

const getProx = () => {
    prox = intervaloNumRandom(valorMin,valorMax);
}

const startGame = () => {
getProx(); //Primeiro valor aleatório 

vezJogador=false;

tabuleiro.classList.add(dados[prox-1]);

for (const cell of celulas){
    cell.addEventListener('click', clicarColuna, {once: true});
    
}
}

//Função que adiciona a classe do dado a uma célula
function addDado(cel1,dadoRandom){
    cel1.classList.add(dados[dadoRandom-1]);
}

// Definição da função que muda a vez
function mudaVez(d){
    vezJogador = !vezJogador;
    
    for (const i of dados){
        tabuleiro.classList.remove(i);
    }
    tabuleiro.classList.add(dados[prox-1]);

}

const clicarColuna = (x) => {
    // Botar o dado
    const cell = x.target;
    let dadoSerAdicionado = prox;
    
    addDado(cell,dadoSerAdicionado);
    
    getProx();
    // Mudar vez
    mudaVez(dadoSerAdicionado);

    // Verificar tabela cheia
}

//Começa o jogo
startGame();