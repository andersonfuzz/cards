//Apontando Grig
const grid = document.querySelector(".grid");
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
//cartas viradas
let card01 = ""
let card02 = ""

//Criando elemento e adicionando classes
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}
//verificar
const checkCard = () => {
  let cardRevel01 = card01.getAttribute('name')
  let cardRevel02 = card02.getAttribute('name')

  if (cardRevel01 === cardRevel02) {
    card01.firstChild.classList.add('disabledCard')
    card02.firstChild.classList.add('disabledCard')
    card01 = "";
    card02 = "";
  } else {
    setTimeout(() => {
      card01.classList.remove("revealCard")
      card02.classList.remove("revealCard")
      card01 = "";
      card02 = "";
    }, 500)

  }

}
//Revelando cartas
const revealCard = ({ target }) => {
  if (target.parentNode.className.includes("revealCard")) {
    return
  }
  if (card01 === '') {
    target.parentNode.classList.add('revealCard')
    card01 = target.parentNode
  } else if (card02 === '') {
    target.parentNode.classList.add('revealCard')
    card02 = target.parentNode

    checkCard()
  }

}
//Criando Carta
const createCard = (character) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url(../img/${character}.jpg)`;

  card.appendChild(front);
  card.appendChild(back);

  card.setAttribute("name", character);
  card.addEventListener('click', revealCard)
  return card;
}

//Tabuleiro
const board = () => {
  //Dobrando cartas com operador 'spread'
  const doubleCharacters = [...characters, ...characters];
  //Embaralhando cartas
  const mixCharacters = doubleCharacters.sort(() => Math.random() - 0.5); //array.sort()=> Ordena array em ordem alfabética.Math.random retorna um numéro entre 0 e 1,mas sempre menor que um.O '-0.5' garente um número maior ou menor que 0. Vide Mdn
  mixCharacters.forEach((character) => {
    const avatar = createCard(character);
    grid.appendChild(avatar);
  });
}

//Botão de recomeçar
const btnRestart=document.querySelector('.restart')
      btnRestart.addEventListener('click',()=>location.reload())

//Botão de novo jogador
const btnNewPlayer=document.querySelector('.newPlayer')
      btnNewPlayer.addEventListener('click',()=>location='../index.html')
//Nome do jogador
const spanName=document.querySelector('.name')
      spanName.innerHTML=localStorage.getItem('player')
      
      
      //Tempo de jogo
      const hor=document.querySelector('.hor')
      const min=document.querySelector('.min')
      const seg=document.querySelector('.seg')
      let horas=0
      let minutos=0
      let segundos=0
      const cronometro=()=>{

          setInterval(()=>{
        segundos++
        if(segundos==60){
          minutos++
          segundos=0
          min.innerHTML=minutos
        }if(minutos==60){
            horas++
            minutos=0
            hor.innerHTML=horas
        }
        seg.innerHTML=segundos
          },10)

      }
      board()
      cronometro()
      