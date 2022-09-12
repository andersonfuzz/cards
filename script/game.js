"use strict";
//Apontando Grig
const grid = document.querySelector(".grid");
//cartas viradas
let card01 = ''
let card02 = ''
//verificar
const checkCard = () => {
  const cardRevel01 = card01.getAttribute('name')
  const cardRevel02 = card02.getAttribute('name')
  if (cardRevel01 === cardRevel02) {
    card01.firstChild.classList.add('opa')
    card02.firstChild.classList.add('opa')
    card01 = ''
    card02 = ''
  } else {

    setInterval(()=>{

      card01.classList.remove("revelCard");
      card02.classList.remove("revelCard");
      card01 = "";
      card02 = "";

    },1000)

  }

}
//Revelando cartas
const revelCard = ({ target }) => {
  if (target.parentNode.classList.contains("revelCard")) {
    return
  }
  if (card01 === '') {
    target.parentNode.classList.add('revelCard')
    card01 = target.parentNode
  } else if (card02 === '') {
    target.parentNode.classList.add('revelCard')
    card02 = target.parentNode
  }
  
  checkCard()
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
  name.innerHTML = window.localStorage.getItem('player')

}