"use strict";
//Apontando Grig
const grid = document.querySelector(".grid");

//Revelando cartas
const revelCard=({target})=>{
  target.parentNode.classList.add('revelCard')
}
//Criando carta
function createCard(character) {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url(../img/${character}.jpg)`;

  card.appendChild(front);
  card.appendChild(back);

  card.setAttribute("name", character);
  card.addEventListener('click', revelCard)


  return card;
}
//cartas viradas
const card01 = ''
const card02 = ''

//Criando elemento e adicionando classes
function createElement(tag, $class) {
  const element = document.createElement(tag);
  element.classList = $class;
  return element;
}

//Personagens
const characters = [
  "gaara",
  "itachi",
  "jiraiya",
  "kawaki",
  "naruto",
  "meiTerumī",
  "kisame",
  "konan",
  "boruto",
  "madara",
  "yamato",
  "zabuza"
];

//Tabuleiro
function board() {
  //Dobrando cartas com operador 'spread'
  const doubleCharacters = [...characters, ...characters];
  //Embaralhando cartas
  const mixCharacters = doubleCharacters.sort(() => Math.random() - 0.5); //array.sort()=> Ordena array em ordem alfabética.Math.random retorna um numéro entre 0 e 1,mas sempre menor que um.O '-0.5' garente um número maior ou menor que 0. Vide Mdn
  mixCharacters.forEach((character) => {
    const avatar = createCard(character);
    grid.appendChild(avatar);
  });
}
//Carregando jogo
window.onload = () => {
  playerName()
  board();
};


//Interface do jogo
const newPlayer = document.querySelector('.newPlayer')
const restart = document.querySelector('.restart')
newPlayer.addEventListener('click', () => window.location = '../index.html')
restart.addEventListener('click', () => window.location.reload(true))
//Nome do jogador
function playerName() {
  const name = document.querySelector('.name')
  name.innerHTML=window.localStorage.getItem('player')
  
}