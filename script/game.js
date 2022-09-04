"use strict";
//Apontando Grig
const grid = document.querySelector(".grid");
//Personagens
const characters = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "010",
  "011",
];

//Criando carta
function createCard(character) {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url(../img/${character}.jpg)`;

  card.appendChild(front);
  card.appendChild(back);

  return card;
}

//Criando elemento e adicionando classes
function createElement(tag, $class) {
  const element = document.createElement(tag);
  element.classList = $class;
  return element;
}
//Tabuleiro
function board() {
  //Dobrando cartas com operador 'spread'
  const doubleCharacters = [...characters, ...characters];

  //Embaralhando cartas
  const mix = doubleCharacters.sort(() => Math.random() - 0.5);
  mix.forEach((item) => {
    const avatar = createCard(item);
    grid.appendChild(avatar);
  });
}

//Carregando jogo
window.onload = () => {
  board();
};
