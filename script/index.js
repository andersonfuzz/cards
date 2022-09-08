const input = document.querySelector('input')
const button = document.querySelector('button')
const form=document.querySelector('.container')
const validateImput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled')
        return
    }
    button.setAttribute('disabled', '')
}

const submit=(event)=>{
    event.preventDefault()
    localStorage.setItem('player',input.value)
}

input.addEventListener('input', validateImput)
form.addEventListener('submit',submit)