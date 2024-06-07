document.getElementById("rateButton").addEventListener("click", function() {
    document.getElementById("ratePopup").style.display = "block";
});

document.querySelector(".close-button").addEventListener("click", function() {
    document.getElementById("ratePopup").style.display = "none";
});

function calculateValue() {
    var piAmount = document.getElementById("piAmount").value;
    if (piAmount) {
        var usdValue = (piAmount * 98.78).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        var tshValue = (piAmount * 256828).toLocaleString('en-US');
        document.getElementById("results").innerHTML = `Value in USD: ${usdValue}<br>Value in TSH: ${tshValue}`;
    } else {
        document.getElementById("results").innerHTML = "Please enter a Pi amount.";
    }
}
