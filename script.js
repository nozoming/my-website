
const colorButton = document.getElementById('colorButton');

const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    document.body.classList.add('light-mode');

    themeToggle.addEventListener('click', function () {
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.replace('light-mode', 'dark-mode');
            themeToggle.textContent = '☀️ ライト';
        } else {
            document.body.classList.replace('dark-mode', 'light-mode');
            themeToggle.textContent = '🌙 ダーク';
        }
    });
}
if (colorButton) {
    const colors = ['#f5f5f5', '#e8f5e9', '#e3f2fd', '#fff8e1', '#fce4ec'];
    let colorIndex = 0;

    colorButton.addEventListener('click', function () {
        colorIndex = (colorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[colorIndex];
    });
}

// お問い合わせフォーム（contact.html用）
const btn = document.getElementById('btn');
if (btn) {
    const nameInput = document.getElementById('nameInput');
    const messageInput = document.getElementById('messageInput');
    const result = document.getElementById('result');

    btn.addEventListener('click', function () {
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
}