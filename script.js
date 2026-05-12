
function showPage(id){
document.querySelectorAll('.page').forEach(p=>{
p.classList.remove('active')
})

document.getElementById(id).classList.add('active')
}

function login(){
alert('Login realizado com sucesso!')
}

function checkout(){
alert('Pagamento aprovado!')
}

function launchGame(){
alert('Abrindo SPEAM Launcher...')
}

function buyGame(name){
alert('Compra realizada: ' + name)
}

function openGame(title){
document.getElementById('gameModal').style.display='block'
document.getElementById('gameTitle').innerText=title
}

function closeModal(){
document.getElementById('gameModal').style.display='none'
}
