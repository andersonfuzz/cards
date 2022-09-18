const grid = document.querySelector(".grid")
const btnRestart = document.querySelector('.restart')
const btnNewPlayer = document.querySelector('.newPlayer')
const spanName = document.querySelector('.name')
const hou = document.querySelector('.hor')
const min = document.querySelector('.min')
const sec = document.querySelector('.seg')


let setInter = ""
let card01 = ""
let card02 = ""
let pairRevealed = 0
let attempt = 0
let hour = 0
let minutes = 0
let second = 0
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

btnRestart.addEventListener('click', () => location.reload())
btnNewPlayer.addEventListener('click', () => location = '../index.html')
spanName.innerHTML = localStorage.getItem('player')

const board = () => {

  const doubleCharacters = [...characters, ...characters];
  const mixCharacters = doubleCharacters.sort(() => Math.random() - 0.5);
  mixCharacters.forEach((character) => {
    const avatar = createCard(character);
    grid.appendChild(avatar);
  });
}
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
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}
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
const checkCard = () => {
  attempt++
  let cardRevel01 = card01.getAttribute('name')
  let cardRevel02 = card02.getAttribute('name')

  if (cardRevel01 === cardRevel02) {
    card01.firstChild.classList.add('disabledCard')
    card02.firstChild.classList.add('disabledCard')
    card01 = "";
    card02 = "";
    pairRevealed++
    endGame(pairRevealed)
  } else {
    setTimeout(() => {
      card01.classList.remove("revealCard")
      card02.classList.remove("revealCard")
      card01 = "";
      card02 = "";
    }, 500)

  }
  attempts(attempt)

}
const endGame = (pairRevealed) => {
  if (pairRevealed == 12) {
    setTimeout(() => { alert('Jogo finalidazo!') }, 1000)
    clearInterval(setInter)
  }
}
const attempts = (attempts) => {
  if (attempts < 10) {
    document.querySelector('.attempts').innerHTML = `0${attempts}`

  } else document.querySelector('.attempts').innerHTML = attempts

}
const stopwatch = () => {

  setInter = setInterval(() => {
    second++
    if (second == 60) {
      minutes++
      second = 0
      if (minutes < 10) {
        min.innerHTML = `0${minutes}`
      } else min.innerHTML = minutes

    } if (minutes == 60) {
      hour++
      minutes = 0
      if (hour < 10) {
        hou.innerHTML = `0${hour}`
      } else hou.innerHTML = hour

    } if (second < 10) {
      sec.innerHTML = `0${second}`
    } else sec.innerHTML = second
  }, 1000)
}
const initi=()=>{board(),stopwatch()}

initi()