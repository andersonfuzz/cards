const grid = document.querySelector(".grid");

const baralho = [
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
//Criando carta
function newCard(personagen) {
  const card = newElement("div", "card");
  const front = newElement("div", "face front");
  const back = newElement("div", "face back");

        front.style.backgroundImage=`url('../img${personagen}.jpg')`

  card.appendChild(front);
  card.appendChild(back);

  return card;
}

//Criando elemento e adicionando classes
function newElement(tag, $class) {
  const element = document.createElement(tag);
  element.classList = $class;
  return element;
}

function tabuleiro() {
  baralho.forEach(() => {
    const carta = newCard(baralho);
    grid.appendChild(carta);
  });
}

//Carregando jogo
window.onload = () => {
  tabuleiro();
};
