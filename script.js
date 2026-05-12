
function showPage(id){
document.querySelectorAll('.page').forEach(page=>{
page.classList.remove('active')
})

document.getElementById(id).classList.add('active')
}

function buyGame(name){
alert('Pagamento aprovado para: ' + name)
}

function login(){
alert('Login realizado com sucesso!')
}
