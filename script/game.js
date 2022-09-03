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
  "10",
  "11",
];
//Dobrando cartas com operador 'spread
const doubleCharacters=[ ...characters,...characters]
//Criando carta
function createCard(character) {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

        front.style.backgroundImage=`url(../img/${character}.jpg)` 

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
/*function board() {
   for(let i=0;i<doubleCharacters.length;i++){
        const avatar= createCard(doubleCharacters[i])
        grid.appendChild(avatar)
   }
}*/
//Tabuleiro
function board(){
    doubleCharacters.forEach((item)=>{
        const avatar=createCard(item)
        grid.appendChild(avatar)
    })
}

//Carregando jogo
window.onload = () => {
  board();
};
