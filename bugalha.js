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
let valorCell = [0,0,0,0,0,0,0,0,0];
let coluna = [0,0,0];

const verifValor = (x) => {
    //Adicionando valor a cada célula individual
    for(let i=0; i<9; i++){
        if (x.target === celulas[i]){
            valorCell[i] += prox; 
        }
    }

    if(x.target === celulas[0] || x.target === celulas[3] || x.target === celulas[6]){
        coluna[0] = valorCell[0] + valorCell[3] + valorCell[6];
        //Verificação de iguais
            if(valorCell[0] === valorCell[3] || valorCell[0] === valorCell[6] || valorCell[3] === valorCell[6]){
                if(valorCell[0] === valorCell[3]) {coluna[0] = 2*valorCell[0] + 2*valorCell[3] + valorCell[6];}
                if(valorCell[0] === valorCell[6]) {coluna[0] = 2*valorCell[0] + 2*valorCell[6] + valorCell[3];}
                if(valorCell[3] === valorCell[6]) {coluna[0] = 2*valorCell[3] + 2*valorCell[6] + valorCell[0];}
            }
            if (valorCell[0] === valorCell[3] && valorCell[3] === valorCell[6]){
                coluna[0] = 3*valorCell[0] + 3*valorCell[3] + 3*valorCell[6];
            }
    }

    if(x.target === celulas[1] || x.target === celulas[4] || x.target === celulas[7]){
        coluna[1] = valorCell[1] + valorCell[4] + valorCell[7];

        if(valorCell[1] === valorCell[4] || valorCell[1] === valorCell[7] || valorCell[4] === valorCell[7]){
            if(valorCell[1] === valorCell[4]) {coluna[1] = 2*valorCell[1] + 2*valorCell[4] + valorCell[7];}
                if(valorCell[1] === valorCell[7]) {coluna[1] = 2*valorCell[1] + 2*valorCell[7] + valorCell[4];}
                if(valorCell[4] === valorCell[7]) {coluna[1] = 2*valorCell[4] + 2*valorCell[7] + valorCell[1];}
        }  
        if (valorCell[1] === valorCell[4] && valorCell[4] === valorCell[7]){
            coluna[1] = 3*valorCell[1] + 3*valorCell[4] + 3*valorCell[7];
        }
}

    if(x.target === celulas[2] || x.target === celulas[5] || x.target === celulas[8]){
        coluna[2] = valorCell[2] + valorCell[5] + valorCell[8]; 
        
            if(valorCell[2] === valorCell[5] || valorCell[2] === valorCell[8] || valorCell[5] === valorCell[8]){
                if(valorCell[2] === valorCell[5]) {coluna[2] = 2*valorCell[2] + 2*valorCell[5] + valorCell[8];}
                if(valorCell[2] === valorCell[8]) {coluna[2] = 2*valorCell[2] + 2*valorCell[8] + valorCell[5];}
                if(valorCell[5] === valorCell[8]) {coluna[2] = 2*valorCell[5] + 2*valorCell[8] + valorCell[2];}
            }
            if (valorCell[2] === valorCell[5] && valorCell[5] === valorCell[8]){
                coluna[2] = 3*valorCell[2] + 3*valorCell[5] + 3*valorCell[8];
            }  
    }

    const elementoValoresSomados = document.getElementById('valoresSomados');
    elementoValoresSomados.innerHTML = `${coluna[0]} ${coluna[1]} ${coluna[2]}`;
    const elementoValorTotal = document.getElementById('valorTotal');
    elementoValorTotal.innerHTML = `${coluna[0]+coluna[1]+coluna[2]}`;

    console.log("Coluna 1:", coluna[0]);
    console.log("Coluna 2:", coluna[1]);
    console.log("Coluna 3:", coluna[2]);
}



const clicarColuna = (x) => {
    // Botar o dado
    const cell = x.target;
    let dadoSerAdicionado = prox;
    addDado(cell,dadoSerAdicionado);
    
    dadoCanto.innerHTML = dadoCanto.classList.remove(dados[prox-1]);
   
    //Verifica presença de dado e soma dado no valor da coluna
    verifValor(x);

    getProx();
    dadoCanto.innerHTML = dadoCanto.classList.add(dados[prox-1]); 
    

    // Mudar vez
    mudaVez(dadoSerAdicionado);

    // Fim de Jogo
    const acabou = endGame("d1","d2","d3","d4","d5","d6");
    if (acabou === true){
        console.log('acabou rs');
        
    }
}

//Começa o jogo
startGame();


