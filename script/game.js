const card=document.querySelectorAll('.card')
      card.addEventListener('click',revelCard)

    //Revel Card

    function revelCard(){
        card.classList.add('revelCard')
    
        saveCard(target)

    }


    //SaveCard
    const card01=''
    const card02=''

    function saveCard(target){
        if(card01===''){
            card01=target
        }else if(card02===''){
            card02=target
        }
        checkCard(card01,card02)
    }

    //Check Card
    function checkCard(card01,card02){
    if(card01===card02){
        //permanece revelada
    }else{
        //virar carta
    }
    }