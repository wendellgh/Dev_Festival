
const nome = window.localStorage.getItem('nome')
const email = window.localStorage.getItem('email')
const qnttickets = window.localStorage.getItem('tickets')

const nomeLabel = document.getElementById('nome')
const emailLabel = document.getElementById('email')
const ticketsLabel = document.getElementById('quantTickets')

nomeLabel.innerText = nome
emailLabel.innerText = email
ticketsLabel.innerText = qnttickets