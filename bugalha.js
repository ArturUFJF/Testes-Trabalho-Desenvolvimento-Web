const celulas = document.querySelectorAll("[data-cell]");
const tabuleiro = document.querySelector("[data-board]");
const dadoCanto = document.querySelector("[data-cel");
const celulas2 = document.querySelectorAll("[data-cell2]");
const tabuleiro2 = document.querySelector("[data-board2]");

console.log(dadoCanto);

function intervaloNumRandom(a, b)
{
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

// Array de classes de dado
let dados = ["d1", "d2", "d3", "d4", "d5", "d6"];

const valorMin = 1;
const valorMax = 6;

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

tabuleiro.classList.add(dados[prox-1]);

for (var i=0; i<9; i++){
    celulas[i].addEventListener('click', clicarColuna, {once: true});
}
}

function addDado(cel1,dadoRandom){
    cel1.classList.add(dados[dadoRandom-1]);
}

let valorCell2 = [0,0,0,0,0,0,0,0,0];
let coluna2 = [0,0,0];

const valorBot = () =>{
    //Coluna 1
    coluna2[0] = valorCell2[0] + valorCell2[3] + valorCell2[6];
    //Verificação de iguais
        if(valorCell2[0] === valorCell2[3] || valorCell2[0] === valorCell2[6] || valorCell2[3] === valorCell2[6]){
            if(valorCell2[0] === valorCell2[3]) {coluna2[0] = 2*valorCell2[0] + 2*valorCell2[3] + valorCell2[6];}
            if(valorCell2[0] === valorCell2[6]) {coluna2[0] = 2*valorCell2[0] + 2*valorCell2[6] + valorCell2[3];}
            if(valorCell2[3] === valorCell2[6]) {coluna2[0] = 2*valorCell2[3] + 2*valorCell2[6] + valorCell2[0];}
        }
        if (valorCell2[0] === valorCell2[3] && valorCell2[3] === valorCell2[6]){
            coluna2[0] = 3*valorCell2[0] + 3*valorCell2[3] + 3*valorCell2[6];
        }

    //Coluna 2
    coluna2[1] = valorCell2[1] + valorCell2[4] + valorCell2[7];
    //Verificação de iguais
    if(valorCell2[1] === valorCell2[4] || valorCell2[1] === valorCell2[7] || valorCell2[4] === valorCell2[7]){
        if(valorCell2[1] === valorCell2[4]) {coluna2[1] = 2*valorCell2[1] + 2*valorCell2[4] + valorCell2[7];}
            if(valorCell2[1] === valorCell2[7]) {coluna2[1] = 2*valorCell2[1] + 2*valorCell2[7] + valorCell2[4];}
            if(valorCell2[4] === valorCell2[7]) {coluna2[1] = 2*valorCell2[4] + 2*valorCell2[7] + valorCell2[1];}
    }  
    if (valorCell2[1] === valorCell2[4] && valorCell2[4] === valorCell2[7]){
        coluna2[1] = 3*valorCell2[1] + 3*valorCell2[4] + 3*valorCell2[7];
    }

    //Coluna 3
    coluna2[2] = valorCell2[2] + valorCell2[5] + valorCell2[8]; 
    //Verificação de iguais
        if(valorCell2[2] === valorCell2[5] || valorCell2[2] === valorCell2[8] || valorCell2[5] === valorCell2[8]){
            if(valorCell2[2] === valorCell2[5]) {coluna2[2] = 2*valorCell2[2] + 2*valorCell2[5] + valorCell2[8];}
            if(valorCell2[2] === valorCell2[8]) {coluna2[2] = 2*valorCell2[2] + 2*valorCell2[8] + valorCell2[5];}
            if(valorCell2[5] === valorCell2[8]) {coluna2[2] = 2*valorCell2[5] + 2*valorCell2[8] + valorCell2[2];}
        }
        if (valorCell2[2] === valorCell2[5] && valorCell2[5] === valorCell2[8]){
            coluna2[2] = 3*valorCell2[2] + 3*valorCell2[5] + 3*valorCell2[8];
        }  


//Imprime valor de cada coluna
const elementoValoresSomados2 = document.getElementById('valoresSomados2');
elementoValoresSomados2.innerHTML = `${coluna2[0]} ${coluna2[1]} ${coluna2[2]}`;
//Imprime valor total
const elementoValorTotal2 = document.getElementById('valorTotal2');
elementoValorTotal2.innerHTML = `${coluna2[0] + coluna2[1] + coluna2[2]}`;
}

function botJoga(){
    let randomCell = intervaloNumRandom(0,8);
    while (valorCell2[randomCell] != 0){
        randomCell = intervaloNumRandom(0,8);
    }
    let randomDado = intervaloNumRandom(0,5);
    const cell2 = celulas2[randomCell];
    cell2.classList.add(dados[randomDado]);
    valorCell2[randomCell] += randomDado+1;
    
    //Soma dos valores do bot!
    valorBot();
    //Começo da ideia de como deletar dados
    deletaDado(celulas,randomCell);
}

function deletaDado(x,y){
    //Começo da ideia de como deletar dados

    //Coluna 1
    if  ((y===0) || (y===3) || (y===6)){
        if  (valorCell2[y]===valorCell[0]){
        for (const i of dados){
        x[0].classList.remove(i);
    }
        x[0].addEventListener('click', clicarColuna, {once: true});
}
    if  (valorCell2[y]===valorCell[3]){
        for (const i of dados){
        x[3].classList.remove(i);    
    }
        x[3].addEventListener('click', clicarColuna, {once: true});
}
    if  (valorCell2[y]===valorCell[6]){
        for (const i of dados){
            x[6].classList.remove(i);         
        }
            x[6].addEventListener('click', clicarColuna, {once: true});
        }
    }

        //Coluna 2
        if  ((y===1) || (y===4) || (y===7)){
            if  (valorCell2[y]===valorCell[1]){
                for (const i of dados){
                x[1].classList.remove(i);    
            }
                x[1].addEventListener('click', clicarColuna, {once: true});
        }
            if  (valorCell2[y]===valorCell[4]){
                for (const i of dados){
                x[4].classList.remove(i);    
            }
                x[4].addEventListener('click', clicarColuna, {once: true});
        }
            if  (valorCell2[y]===valorCell[7]){
                for (const i of dados){
                x[7].classList.remove(i);    
            }
                x[7].addEventListener('click', clicarColuna, {once: true});
        }
            }

        //Coluna 3
            if  ((y===2) || (y===5) || (y===8)){
                if  (valorCell2[y]===valorCell[2]){
                    for (const i of dados){
                    x[2].classList.remove(i);    
                }
                    x[2].addEventListener('click', clicarColuna, {once: true});
            }
            if  (valorCell2[y]===valorCell[5]){
                for (const i of dados){
                x[5].classList.remove(i);    
            }
                x[5].addEventListener('click', clicarColuna, {once: true});
        }
            if  (valorCell2[y]===valorCell[8]){
                for (const i of dados){
                x[8].classList.remove(i);    
        }
                x[8].addEventListener('click', clicarColuna, {once: true});
    }
                }
    }



// Definição da função que troca a classe do dado
function trocaClasse(d){
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

    //Imprime valor de cada coluna
    const elementoValoresSomados = document.getElementById('valoresSomados');
    elementoValoresSomados.innerHTML = `${coluna[0]} ${coluna[1]} ${coluna[2]}`;
    //Imprime valor total
    const elementoValorTotal = document.getElementById('valorTotal');
    elementoValorTotal.innerHTML = `${coluna[0]+coluna[1]+coluna[2]}`;
}



const clicarColuna = (x) => {
    // Botar o dado
    const cell = x.target;
    let dadoSerAdicionado = prox;
    addDado(cell,dadoSerAdicionado);
    
    //Começo da ideia de como deletar dados
    //deletaDado(celulas2,indexApagar);

    //OBS: descobrir como saber o index da célula clicada
    

    dadoCanto.innerHTML = dadoCanto.classList.remove(dados[prox-1]);
   
    //Verifica presença de dado e soma dado no valor da coluna
    verifValor(x);

    getProx();
    dadoCanto.innerHTML = dadoCanto.classList.add(dados[prox-1]); 

    //Troca classe
    trocaClasse(dadoSerAdicionado);

    //Bot joga
    botJoga();

    // Fim de Jogo
    const acabou = endGame("d1","d2","d3","d4","d5","d6");
    if (acabou === true){
        console.log('acabou rs');
        
    }
}

//Começa o jogo
startGame();


