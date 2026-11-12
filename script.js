// Батырманы және хабарламаны тауып аламыз
const actionBtn = document.getElementById('actionBtn');
const secretMessage = document.getElementById('secretMessage');

// Батырманы басқан кездегі оқиға (Event Listener)
actionBtn.addEventListener('click', () => {
    // Егер хабарлама жасырын болса, көрсетеміз, әйтпесе қайта жасырамыз
    if (secretMessage.style.display === 'none' || secretMessage.style.display === '') {
        secretMessage.style.display = 'block';
        actionBtn.textContent = 'Закрыть сообщение';
    } else {
        secretMessage.style.display = 'none';
        actionBtn.textContent = 'Нажми меня';
    }
});