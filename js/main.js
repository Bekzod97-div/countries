const elDarkModeButton = document.querySelector('.main-btn');
elDarkModeButton.addEventListener('click', function() {
    document.body.classList.add('dark-mode');
});

const elLightModeButton = document.querySelector('.main-btn');
elLightModeButton.addEventListener('dblclick', function() {
    document.body.classList.remove('dark-mode');
});