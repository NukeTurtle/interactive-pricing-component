var slider = document.querySelector('#myRange');
var monthlySwitch = document.querySelector("input[type=checkbox]");
var valueViews = document.querySelector('#valueViews');
var valuePrice = document.querySelector('#valuePrice');

valueViews = ["10K", "50K", "100K", "500K", "1M"];

slider.max = valueViews.length;
document.querySelector("input[type=checkbox]").addEventListener("click", switchState);

function switchState() {
    if (monthlySwitch.checked === true) {
        valuePrice = ["$6", "$9", "$12", "$18", "$27"];
    } else {
        valuePrice = ["$8", "$12", "$16", "$24", "$36"];
    }
}

let i = 3;

slider.oninput = function() {
    i = this.value;
    document.querySelector("#valuePrice").innerText = valuePrice[i-1];
    document.querySelector("#valueViews").innerText = valueViews[i-1];
}
