document.getElementById('entrar').addEventListener('click', function (e) {
  e.preventDefault();

  let usuario = document.getElementById('ilogin').value;
  let senha = document.getElementById('isenha').value;

  if (usuario === '' || senha === '') {
    alert('Por favor, preencha todos os campos.');
  } else {
    alert('Login simulado com sucesso!');
    // Aqui você pode redirecionar ou validar no back-end futuramente
  }
});
