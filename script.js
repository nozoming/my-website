document.addEventListener('DOMContentLoaded', function() {
    const h2 = document.querySelector('h2');
    let clicked = false;
    
    h2.addEventListener('click', function() {
        if (clicked === false) {
            h2.style.color = '#e74c3c';
            h2.textContent = 'クリックされました！';
            clicked = true;
        } else {
            h2.style.color = '#2c3e50';
            h2.textContent = 'ようこそ！';
            clicked = false;
        }
    });
});