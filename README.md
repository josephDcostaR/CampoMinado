# Projeto Campo Minado

Este projeto é um estudo prático de desenvolvimento web utilizando HTML, CSS e JavaScript vanilla. Nele, foi construída uma versão web do clássico jogo de Campo Minado, com design inspirado em videogames retrô.

## Como Jogar

- O tabuleiro possui 10x10 células (total de 100).
- Clique em uma célula para revelar o número de bombas adjacentes.
- O objetivo é revelar todas as células que **não** contêm bombas.
- **Atenção:** Se você clicar em uma bomba, o jogo termina!

## Estrutura do Projeto
ProjetoCampoMinado/ 
└── scripts/ 
    ├── gameloop.js 
    └── instrucoes.js
├── style/ 
    │└── style.css 
├── index.html 


- **index.html:** Arquivo principal da aplicação.
- **style/style.css:** Folha de estilo responsável pela aparência do jogo.
- **scripts/gameloop.js:** Lógica principal do jogo (criação do tabuleiro, manipulação dos cliques, etc).
- **scripts/instrucoes.js:** Funções auxiliares, como a exibição de instruções e popups.

## Features

1. **Escolha de Dificuldade:**  
   O usuário pode selecionar entre três níveis de dificuldade, que ajustam a quantidade de bombas no campo:
   - **Fácil:** 14 bombas
   - **Médio:** 28 bombas
   - **Difícil:** 56 bombas

2. **Reset:**  
   Um botão de "Replay" permite reiniciar o jogo, redistribuindo as bombas conforme a dificuldade escolhida.

3. **Estilização Personalizada:**  
   A interface possui um design inspirado em videogames clássicos, com uma estética retrô.

## Futuras Atualizações

- **Modo Custom:** Permitir que o usuário defina manualmente o número de bombas (dentro de um intervalo pré-determinado).
- **Adição de Áudio:** Sons para cliques, explosões e feedbacks do jogo.
- **Sistema de Pontuação:** Registrar e exibir pontuações para incentivar a competição.
- **Tela de Game Over Aprimorada:** Melhorar a interface quando o jogador perder, com opções de reinício e feedback visual.
