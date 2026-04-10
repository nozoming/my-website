document.addEventListener('DOMContentLoaded', function() {

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const dateText = document.createElement('p');
    dateText.textContent = '今日は ' + year + '年' + month + '月' + day + '日 です';
    dateText.style.color = '#1a6b3c';
    dateText.style.fontWeight = 'bold';

    const main = document.querySelector('main');
    main.appendChild(dateText);

});
const colorButton = document.getElementById('colorButton');
const colors = ['#f2eef0', '#e8f5e9', '#e3f2fd', '#fff3e0', '#fce4ec'];
let colorIndex = 0;

colorButton.addEventListener('click', function() {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIndex];
});