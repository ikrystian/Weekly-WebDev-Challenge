document.addEventListener('DOMContentLoaded', () => {
    setTimeout(function() {
        document.getElementById('loader').remove();
    }, 1);
}, false);

var cityInput = document.getElementById('city-value');
cityInput.addEventListener('click', () => {
    cityInput.classList.add('open');
});
document.querySelectorAll('.city-item').forEach(e => {
    e.addEventListener('click', () => {
        cityInput.value = e.innerHTML;
        cityInput.classList.remove('open');
    })
});