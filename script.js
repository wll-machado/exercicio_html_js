
var meuFormulario = document.getElementById('meuFormulario');

meuFormulario.addEventListener('submit', function(event) {
    // Impede o recarregamento padrão da página
    event.preventDefault();
});

function validarFormulario() {
    // Obtém os valores dos campos A e B
    var valorCampoA = document.getElementById('campoA').value;
    var valorCampoB = document.getElementById('campoB').value;

    // Converte os valores para números
    valorCampoA = parseFloat(valorCampoA);
    valorCampoB = parseFloat(valorCampoB);

    // Verifica se B é maior que A
    if (valorCampoB > valorCampoA) {
      // Se for válido, exibe mensagem positiva
      exibirMensagem('Formulário válido! B é maior que A.', true);
    } else {
      // Se for inválido, exibe mensagem negativa
      exibirMensagem('Formulário inválido! B deve ser maior que A.', false);
    }
  }

  function exibirMensagem(mensagem, positiva) {
    var mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.textContent = mensagem;

    // Adiciona uma classe de estilo com base na natureza da mensagem
    mensagemDiv.className = positiva ? 'mensagem-positiva' : 'mensagem-negativa';
  }