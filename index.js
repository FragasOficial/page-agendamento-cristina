document.getElementById('submitBtn').addEventListener('click', function() {
    // Captura dos valores dos inputs
    var date = document.getElementById('festa').value;
    var timeWeekday = document.getElementById('hora-cons').value;
    var timeSaturday = document.getElementById('hora-cons-sabado').value;
    var timeSunday = document.getElementById('hora-cons-domingo').value;
    var timeHoliday = document.getElementById('hora-cons-feriado').value;

    // Criação de elementos para exibir os valores capturados
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Limpa qualquer conteúdo anterior

    var resultContent = `
        <h3>Resumo do Agendamento</h3>
        <p><strong>Data escolhida:</strong> ${date}</p>
        <p><strong>Horário de atendimento (Semana):</strong> ${timeWeekday}</p>
        <p><strong>Horário de atendimento (Sábado):</strong> ${timeSaturday}</p>
        <p><strong>Horário de atendimento (Domingo):</strong> ${timeSunday}</p>
        <p><strong>Horário de atendimento (Feriado):</strong> ${timeHoliday}</p>
    `;

    resultDiv.innerHTML = resultContent; // Exibe os valores capturados
});