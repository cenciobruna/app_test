const vagaForm = document.getElementById('vagaForm');
const modal = document.getElementById('customModal');
const resultadoDiv = document.getElementById('resultado');
const btnFecharModal = document.getElementById('btnFecharModal');

// Garante que a modal comece escondida assim que a página carregar
document.addEventListener("DOMContentLoaded", function() {
    modal.classList.add('hidden');
});

// Evento ao enviar o formulário
vagaForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturando os valores dos inputs
    const nome = document.getElementById('nome').value.trim();
    const idade = parseInt(document.getElementById('idade').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    // Limpa as classes anteriores do resultado
    resultadoDiv.className = '';

    // Validação do critério
    if (altura >= 1.70 && idade >= 18) {
        resultadoDiv.textContent = `Parabéns, ${nome}! Você pode prosseguir no processo para a vaga!`;
        resultadoDiv.classList.add('sucesso');
    } else {
        resultadoDiv.textContent = `Infelizmente, ${nome}, você não é apto à vaga.`;
        resultadoDiv.classList.add('erro');
    }

    // Mostra a popup removendo a classe hidden
    modal.classList.remove('hidden');
});

// Evento ao clicar no botão Fechar da popup
btnFecharModal.addEventListener('click', function() {
    // Esconde a popup novamente
    modal.classList.add('hidden');
    
    // Reseta todos os campos do formulário para uma nova avaliação
    vagaForm.reset();
});