
var slider = document.querySelector('#myRange');
var monthlySwitch = document.querySelector("input[type=checkbox]");
var valueViews = document.querySelector('#valueViews');
var priceValue = document.querySelector('#priceValue');

valueViews = ["10K", "50K", "100K", "500K", "1M"];
priceValue = ["$8", "$12", "$16", "$24", "$36"];

slider.max = valueViews.length;
document.querySelector("input[type=checkbox]").addEventListener("click", switchState);

// we check if switch is turned ON/OFF and change priceValue accordingly
function switchState() {
    if (monthlySwitch.checked === true) {
        priceValue = ["$6", "$9", "$12", "$18", "$27"];
    } else {
        priceValue = ["$8", "$12", "$16", "$24", "$36"];
    }
}

let i = 3;

slider.oninput = function() {
    i = this.value;
    var color = 'linear-gradient(90deg, hsl(174, 86%, 45%)' + ((i * 25) - 25)  + '%, hsl(224, 65%, 95%) 1px';
    slider.style.background = color;
    document.querySelector("#priceValue").innerText = priceValue[i-1];
    document.querySelector("#valueViews").innerText = valueViews[i-1];
}
