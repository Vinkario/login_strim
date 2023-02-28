const senha = document.querySelector('#senha')
const icon = document.querySelector('#icon')
function eyeclose() {
    if (senha.type === 'password') {
        senha.setAttribute('type', 'text')
        icon.classList.add('hide')
    }else{
        senha.setAttribute('type','password')
        icon.classList.remove('hide')
    }
}