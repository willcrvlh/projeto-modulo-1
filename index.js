//NÃO ESQUECER DE LINKAR O JS NO HTML QUE VOCE APAGOU!!!
function nomeDoUsuario() {
    var nome = prompt('qual é o seu nome?')
   
    while (true) {
       if (nome.length >= 3) {
           alert('olá ' + nome + ', com qual personagem você quer começar?');
           document.getElementById('inicio').style.display = 'block';
           document.getElementById('prejogo').style.display = 'none';
           break;
       } else {
          alert('nome inválido')
          nome = prompt('qual é o seu nome?')
       }
   }
}