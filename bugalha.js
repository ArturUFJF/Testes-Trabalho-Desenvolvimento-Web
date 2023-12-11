const celulas = document.querySelectorAll("[data-cell]");
const tabuleiro = document.querySelector("[data-board]");
const dadoCanto = document.querySelector("[data-cel]");
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

const indicePlayer = (j) =>{
    console.log(j);

}
let valorCell = [0,0,0,0,0,0,0,0,0];
let coluna = [0,0,0];
let valorCell2 = [0,0,0,0,0,0,0,0,0];
let coluna2 = [0,0,0];

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

    for(var i=0; i<9; i++){
        celulas[i].addEventListener('click', indicePlayer(i), {once: true});
        celulas[i].addEventListener('click', clicarColuna, {once: true});
    }
    
}

function addDado(cel1,dadoRandom){
    cel1.classList.add(dados[dadoRandom-1]);
}


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
    deletaDado(celulas,randomCell,valorCell,valorCell2,coluna);
}

function deletaDado(celInimigo,indice,valInimigo,valMeu,colInimigo){
    //Começo da ideia de como deletar dados
    let armazenaNegativo = [0,0,0];
    //Coluna 1
    if  ((indice===0) || (indice===3) || (indice===6)){
        if  (valMeu[indice]===valInimigo[0]){
        for (const i of dados){
        celInimigo[0].classList.remove(i);
    }
        armazenaNegativo[0]+= valMeu[indice];
        valInimigo[0]=0;
        celInimigo[0].addEventListener('click', clicarColuna, {once: true});
}
    if  (valMeu[indice]===valInimigo[3]){
        for (const i of dados){
        celInimigo[3].classList.remove(i);    
    }
        armazenaNegativo[0]+= valMeu[indice];
        valInimigo[3]=0;
        celInimigo[3].addEventListener('click', clicarColuna, {once: true});
}
    if  (valMeu[indice]===valInimigo[6]){
        for (const i of dados){
            celInimigo[6].classList.remove(i);         
        }
            armazenaNegativo[0]+= valMeu[indice];
            valInimigo[6]=0;
            celInimigo[6].addEventListener('click', clicarColuna, {once: true});
        }
        if((valInimigo[0]!=0 && valInimigo[3]!=0) || (valInimigo[0]!=0 && valInimigo[6]!=0) || (valInimigo[3]!=0 && valInimigo[6]!=0)){
            if ((valInimigo[0]===valInimigo[3]) || (valInimigo[0]===valInimigo[6]) || (valInimigo[3]===valInimigo[6])){
                armazenaNegativo[0]*=2;
            }
            if ((valInimigo[0] === valInimigo[3]) && (valInimigo[3] === valInimigo[6])){
                armazenaNegativo[0]/=2;
                armazenaNegativo[0]*=3;
            }
        }
    }

        //Coluna 2
        if  ((indice===1) || (indice===4) || (indice===7)){
            if  (valMeu[indice]===valInimigo[1]){
                for (const i of dados){
                celInimigo[1].classList.remove(i);    
            }
                armazenaNegativo[1]+= valMeu[indice];
                valInimigo[1]=0;
                celInimigo[1].addEventListener('click', clicarColuna, {once: true});
        }
            if  (valMeu[indice]===valInimigo[4]){
                for (const i of dados){
                celInimigo[4].classList.remove(i);    
            }
                armazenaNegativo[1]+= valMeu[indice];
                valInimigo[4]=0;
                celInimigo[4].addEventListener('click', clicarColuna, {once: true});
        }
            if  (valMeu[indice]===valInimigo[7]){
                for (const i of dados){
                celInimigo[7].classList.remove(i);    
            }
                armazenaNegativo[1]+= valMeu[indice];
                valInimigo[7]=0;
                celInimigo[7].addEventListener('click', clicarColuna, {once: true});
        }
        if((valInimigo[1]!=0 && valInimigo[4]!=0) || (valInimigo[1]!=0 && valInimigo[7]!=0) || (valInimigo[4]!=0 && valInimigo[7]!=0)){
            if ((valInimigo[1]===valInimigo[4]) || (valInimigo[1]===valInimigo[7]) || (valInimigo[4]===valInimigo[7])){
                armazenaNegativo[1]*=2;
            }
            if ((valInimigo[1] === valInimigo[4]) && (valInimigo[4] === valInimigo[7])){
                armazenaNegativo[1]/=2;
                armazenaNegativo[1]*=3;
            }
        }
    }

        //Coluna 3
            if  ((indice===2) || (indice===5) || (indice===8)){
                if  (valMeu[indice]===valInimigo[2]){
                    for (const i of dados){
                    celInimigo[2].classList.remove(i);    
                }
                armazenaNegativo[2]+= valMeu[indice];
                valInimigo[2]=0;
                celInimigo[2].addEventListener('click', clicarColuna, {once: true});
            }
            if  (valMeu[indice]===valInimigo[5]){
                for (const i of dados){
                celInimigo[5].classList.remove(i);    
            }
                armazenaNegativo[2]+= valMeu[indice];
                valInimigo[5]=0;
                celInimigo[5].addEventListener('click', clicarColuna, {once: true});
        }
            if  (valMeu[indice]===valInimigo[8]){
                for (const i of dados){
                celInimigo[8].classList.remove(i);    
            }
                armazenaNegativo[2]+= valMeu[indice];
                valInimigo[8]=0;
                celInimigo[8].addEventListener('click', clicarColuna, {once: true});
    }           
    if((valInimigo[2]!=0 && valInimigo[5]!=0) || (valInimigo[2]!=0 && valInimigo[8]!=0) || (valInimigo[5]!=0 && valInimigo[8]!=0)){
        
        if ((valInimigo[2]===valInimigo[5]) || (valInimigo[2]===valInimigo[8]) || (valInimigo[5]===valInimigo[8])){
            armazenaNegativo[2]*=2;
        }
        if ((valInimigo[2] === valInimigo[5]) && (valInimigo[5] === valInimigo[8])){
            armazenaNegativo[2]/=2;
            armazenaNegativo[2]*=3;
        }
    }
}

        //Imprime valor das colunas do inimigo  
        const elementoValoresSomados = document.getElementById('valoresSomados');
        elementoValoresSomados.innerHTML = `${coluna[0]-armazenaNegativo[0]} ${coluna[1]-armazenaNegativo[1]} ${coluna[2]-armazenaNegativo[2]}`;
        //Imprime valor total do inimigo
        const elementoValorTotal = document.getElementById('valorTotal');
        elementoValorTotal.innerHTML = `${coluna[0]-armazenaNegativo[0]+coluna[1]-armazenaNegativo[1]+coluna[2]-armazenaNegativo[2]}`;    
    }



// Definição da função que troca a classe do dado
function trocaClasse(d){
    for (const i of dados){
        tabuleiro.classList.remove(i);
    }
    tabuleiro.classList.add(dados[prox-1]);

}


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
}



const clicarColuna = (x) => {
    // Botar o dado
    const cell = x.target;
    let dadoSerAdicionado = prox;
    addDado(cell,dadoSerAdicionado);
    
    //Começo da ideia de como deletar dados
    //deletaDado(celulas2,indexApagar,valorCell2);
    
    //OBS: descobrir como saber o index da célula clicada
    
    
    dadoCanto.innerHTML = dadoCanto.classList.remove(dados[prox-1]);
    
    //Verifica presença de dado e calcula valor de cada coluna
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


