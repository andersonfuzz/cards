const grid=document.querySelector('.grid')

function newCard(){
    const card=newElement('div','card')
    const front=newElement('div','face front')
    const back=newElement('div','face back')

    card.appendChild(front)
    card.appendChild(back)

    grid.appendChild(card)
}
function newElement(tag,$class){
    const element=document.createElement(tag)
          element.classList($class)
    return element
}


window.onload=()=>{
    newCard()
    newCard()
}