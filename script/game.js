const card=document.querySelector('.card')

    //Revel Card
    card.addEventListener('click',({target})=>{
        card.classList.add('revelCard')
        saveCard()
    
    })


    //SaveCard
    function saveCard(card01,card02){
        const card01=card01
        const card02=card02
        checkCard(card01,card02)
    }

    //Check Card
    function checkCard(card01,card02){

    }