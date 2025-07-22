document.getElementById('entrar').addEventListener('click', function (e) {
  e.preventDefault(); 

  let email = document.getElementById('ilogin').value.trim();
  let senha = document.getElementById('isenha').value.trim();

  if (email === '' || senha === '') {
    alert('Por favor, preencha todos os campos!');
  } else {
    alert('Login simulado com sucesso!');
  }
}) 

window.onload = function () {
  document.getElementById('ilogin').focus();
}

