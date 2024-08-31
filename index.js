
    window.onload = function() {
        const dialog = document.getElementById('welcomeDialog');
        dialog.showModal();

        const scheduleButton = document.getElementById('scheduleButton');
        scheduleButton.onclick = function() {
            dialog.close();
            // Adicione aqui a ação para direcionar ao agendamento
            window.location.href = '/agendamento'; // Exemplo de redirecionamento para a página de agendamento
        };

        const servicesLink = document.getElementById('servicesLink');
        servicesLink.onclick = function() {
            dialog.close();
            // Adicione aqui a ação para direcionar à seção de serviços
            window.location.href = '#services'; // Exemplo de redirecionamento para a seção de serviços
        };
    };

document.getElementById('festa').addEventListener('change', function() {
    var selectedDate = new Date(this.value);
    var dayOfWeek = selectedDate.getDay();
    var isHoliday = checkIfHoliday(selectedDate);

    var scheduleContainer = document.getElementById('scheduleContainer');
    scheduleContainer.innerHTML = ''; // Limpa qualquer conteúdo anterior

    if (dayOfWeek >= 1 && dayOfWeek <= 5 && !isHoliday) {
        scheduleContainer.innerHTML = `
        `;
    } else if (dayOfWeek === 6) {
        scheduleContainer.innerHTML = `
        `;
    } else if (dayOfWeek === 0) {
        scheduleContainer.innerHTML = `
        `;
    } else if (isHoliday) {
        scheduleContainer.innerHTML = `
        `;
    }

    scheduleContainer.classList.remove('hidden');
    document.getElementById('nome').classList.remove('hidden');
});

function checkIfHoliday(date) {
    var holidays = ['2024-04-21', '2024-05-01', '2024-09-07']; // Exemplo de feriados
    return holidays.includes(date.toISOString().split('T')[0]);
}

// Função para mostrar o próximo campo após o preenchimento do atual
document.getElementById('nome').addEventListener('input', function() {
    if (this.value.trim() !== '') {
        document.querySelector('label[for="telefone"]').classList.remove('hidden');
        document.getElementById('telefone').classList.remove('hidden');
    }
});

document.getElementById('telefone').addEventListener('input', function() {
    if (this.value.trim() !== '') {
        document.querySelector('label[for="endereco"]').classList.remove('hidden');
        document.getElementById('endereco').classList.remove('hidden');
    }
});

document.getElementById('endereco').addEventListener('input', function() {
    if (this.value.trim() !== '') {
        document.querySelector('label[for="email"]').classList.remove('hidden');
        document.getElementById('email').classList.remove('hidden');
    }
});

document.getElementById('email').addEventListener('input', function() {
    if (this.value.trim() !== '') {
        document.getElementById('submitBtn').classList.remove('hidden');
    }
});

document.getElementById('submitBtn').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var endereco = document.getElementById('endereco').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('festa').value;
    var timeWeekday = document.getElementById('hora-cons') ? document.getElementById('hora-cons').value : '';
    var timeSaturday = document.getElementById('hora-cons-sabado') ? document.getElementById('hora-cons-sabado').value : '';
    var timeSunday = document.getElementById('hora-cons-domingo') ? document.getElementById('hora-cons-domingo').value : '';
    var timeHoliday = document.getElementById('hora-cons-feriado') ? document.getElementById('hora-cons-feriado').value : '';

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Limpa o conteúdo anterior
    var selectedTime = timeWeekday || timeSaturday || timeSunday || timeHoliday;
    var paymentSection = document.getElementById('paymentSection');

    if (selectedTime) {
        var resultHTML = `
            <h3>Resumo do Agendamento</h3>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
            <p><strong>Endereço:</strong> ${endereco}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Data do Atendimento:</strong> ${date}</p>
            <p><strong>Horário Escolhido:</strong> ${selectedTime}</p>
        `;
        resultDiv.innerHTML = resultHTML;
        paymentSection.style.display = 'block';
    } else {
        resultDiv.innerHTML = '<p>Por favor, selecione um horário.</p>';
        paymentSection.style.display = 'none';
    }
});