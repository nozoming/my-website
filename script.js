document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn');
    const nameInput = document.getElementById('nameInput');
    const messageInput = document.getElementById('messageInput');
    const result = document.getElementById('result');

    btn.addEventListener('click', function() {
        const name = nameInput.value;
        const message = messageInput.value;

        if (name === '' || message === '') {
            result.textContent = '名前とメッセージを入力してください！';
            result.style.color = '#e74c3c';
        } else {
            result.textContent = name + 'さん、メッセージありがとうございます！';
            result.style.color = '#1a6b3c';
        }
    });
});