var slider = document.querySelector('#myRange');
var valueViews = document.querySelector('#valueViews');
var valuePrice = document.querySelector('#valuePrice');

valuePrice.innerHTML = slider.value;

slider.oninput = function (){
    valuePrice.innerHTML = this.value;
}

slider.addEventListener('input', function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, hsl(174, 86%, 45%)' + x + '%, hsl(224, 65%, 95%)' + x + '%';
    slider.style.background = color;
})