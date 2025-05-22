alert('Olá!');// mensagem de boas vindas

document.getElementById('entrar').addEventListener('click', function (e) {
  e.preventDefault(); // Impede o envio do formulário

  let email = document.getElementById('ilogin').value.trim();
  let senha = document.getElementById('isenha').value.trim();

  if (email === '' || senha === '') {
    alert('Por favor, preencha todos os campos!');
  } else {
    alert('Login simulado com sucesso!');
  }
}) // conclui ou impede login, dependendo dos dados serem inseridos ou não

window.onload = function () {
  document.getElementById('ilogin').focus();
}// abre a tela de login com foco já no email


