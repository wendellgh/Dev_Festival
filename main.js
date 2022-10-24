

const buyButton = document.getElementById('buy-buttom')
const cartForm = document.getElementById('cartForm')

const addTicket = document.getElementById('adicionar')
const removeTicket = document.getElementById('remover')
const quantTicket = document.getElementById('quant')
const valores = document.getElementById('valores')



addTicket.addEventListener("click", (e) => {
    e.preventDefault()
    quantTicket.innerText = parseInt(quantTicket.innerText) + 1
    valores.innerText = parseInt(quantTicket.innerText) * 90


})

removeTicket.addEventListener("click", (e) => {
    e.preventDefault()
    if(parseInt(quantTicket.innerText) !== 1){
        quantTicket.innerText = parseInt(quantTicket.innerText) - 1
        valores.innerText = parseInt(quantTicket.innerText) * 90

    }
    

})

cartForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = cartForm.nome.value
    const email = cartForm.email.value
    const tickets = quantTicket.innerText

    window.localStorage.setItem('nome', nome)
    window.localStorage.setItem('email', email)
    window.localStorage.setItem('tickets', tickets)

    window.location.href = "finalizacao.html"
    console.log("nome", nome);
    console.log("e-mail", email);


})

function diurno(){
    document.body.style.background = 'white'
    const modo = document.getElementById('modo')
    modo.innerHTML = "./assets/VectorLua.png"
    

}