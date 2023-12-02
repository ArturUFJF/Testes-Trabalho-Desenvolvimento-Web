const celulas = document.querySelectorAll("[data-cell]");
const tabuleiro = document.querySelector("[data-board]");
const dadoCanto = document.querySelector("[data-cel");

console.log(dadoCanto);

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

const boardCheio = [
    [0,1,2,3,4,5,6,7,8]
];

const endGame = (c1,c2,c3,c4,c5,c6) => {
    return boardCheio.some((combination) => {
        return combination.every((index)=>{
            return (celulas[index].classList.contains(c1) || celulas[index].classList.contains(c2) || celulas[index].classList.contains(c3) || celulas[index].classList.contains(c4) || celulas[index].classList.contains(c5) || celulas[index].classList.contains(c6))
        });
    });
};

const getProx = () => {
    prox = intervaloNumRandom(valorMin,valorMax);
}

const startGame = () => {
getProx(); //Primeiro valor aleatório 

dadoCanto.innerHTML = dadoCanto.classList.add(dados[prox-1]);

vezJogador=false;

tabuleiro.classList.add(dados[prox-1]);

for (const cell of celulas){
    cell.addEventListener('click', clicarColuna, {once: true});
}
}

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
    
    dadoCanto.innerHTML = dadoCanto.classList.remove(dados[prox-1]);
    getProx();
    dadoCanto.innerHTML = dadoCanto.classList.add(dados[prox-1]); 
    
    // Mudar vez
    mudaVez(dadoSerAdicionado);

    // Fim de Jogo
    const acabou = endGame("d1","d2","d3","d4","d5","d6");
    if (acabou = true){
        console.log('acabou rs')
    }
}

//Começa o jogo
startGame();