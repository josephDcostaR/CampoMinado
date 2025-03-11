const gameContainer = document.getElementById("game-container")
const rows = 10;
const cols = 10;
let bombCount = 14;
let cells = []


//Dificuldade
// Dificuldade
// Exemplo: após selecionar a dificuldade, exibir a área do jogo
function niveisDeDificuldade(event) {
    let valor = event.target.dataset.value;
    switch (valor) {
      case 'facil':
        bombCount = 14;
        break;
      case 'medio':
        bombCount = 28;
        break;
      case 'dificil':
        bombCount = 56;
        break;
    }
    desabilitarOutrosBotoes(event.target);
    document.getElementById("difficulty-selection").style.display = "none";
    document.getElementById("game-wrapper").style.display = "flex";
    createBoard();
    cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
  }
  
  function desabilitarOutrosBotoes(botaoClicado) {
    document.querySelectorAll('.container__botao__dificuldade').forEach(botao => {
      if (botao !== botaoClicado) {
        botao.setAttribute('disabled', true);
      }
    });
  }


//Criar Board
function createBoard() {
    gameContainer.innerHTML = ""; // Limpa o conteúdo anterior do tabuleiro
    cells = []; // Limpa a lista de células

    // Cria as células do tabuleiro
    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.id = i;
        gameContainer.appendChild(cell);
        cells.push(cell);
    }

    // Coloca as bombas no tabuleiro
    let bombsPlaced = 0;
    while (bombsPlaced < bombCount) {
        const randomIndex = Math.floor(Math.random() * cells.length);
        if (!cells[randomIndex].classList.contains("bomb")) {
            cells[randomIndex].classList.add("bomb");
            bombsPlaced++;
        }
    }

    return cells;
}


//Lida com o click
function handleCellClick(event){
    const cell = event.target
    if(cell.classList.contains("revealed")) return

    cell.classList.add("revealed")

    if(cell.classList.contains("bomb")) {
        cell.innerHTML = "💥"
        revealAllBombs()
        alert("Game Over!")
    }else {
        const adjacentBombs = getAdjacentBombs(cell.dataset.id)
        cell.innerHTML = adjacentBombs || ""
    }
}

//Revala todas as bombs
function revealAllBombs() {
    cells.forEach((cell)=> {
        if(cell.classList.contains("bomb")) {
            cell.classList.add("revealed")
            cell.innerHTML = "💥"
        }
    })
}

//Calcula o número de bombas adjacentes
function getAdjacentBombs(index) {
    const row = Math.floor(index / cols) //Calcula a linha da célula
    const col = index % cols //Calcula a coluna da célula
    let count = 0 //Inicializa o contador de bombas adjacentes

    //Percorre as células ao redor (3x3)
    for(let r = row - 1; r <= row +1; r++){
        for(let c = col - 1; c <= col + 1; c++) {
            //Verifica se a célula está dentro dos limites do tabuleiro
            if(r >= 0  && r < rows && c >= 0 && c < cols) {
                const neighborIndex = r * cols + c; //Calcula o índice da célula vizinha
                if(cells[neighborIndex].classList.contains("bomb")) {
                    count++
                }
            }
        }
    }
    return count //Retora o número de bombas adjacentes
}

function resetGame() {
    // Recarrega a página atual, reiniciando o estado do jogo
    location.reload();
}


