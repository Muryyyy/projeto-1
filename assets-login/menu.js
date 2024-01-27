var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
  menuItem.forEach((item)=>
  item.classList.remove('ativo') 
  )
  this.classList.add('ativo')
}

menuItem.forEach((item)=>
item.addEventListener('click', selectLink)
)

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
  menuSide.classList.toggle('expandir')
})



//Para direcionar o botao do html para o dashboard

  

  function logar (){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    
    if(login == "admin" && senha == "admin"){
      alert('Logado com sucesso');
      location.href = "painel.html";
    } else {
      alert('Usuário ou senha incorreto');
    }
  }
