function calculateValue() {
    const piAmount = document.getElementById('piAmount').value;
    if (piAmount) {
        const usdValue = (piAmount * 98.78).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        const tshValue = (piAmount * 256828).toLocaleString('en-US', { style: 'currency', currency: 'TZS' });
        document.getElementById('results').innerHTML = `USD: ${usdValue}<br>TZS: ${tshValue}`;
    } else {
        document.getElementById('results').innerHTML = 'Please enter a valid Pi amount.';
    }
}

document.getElementById("rateButton").addEventListener("click", function() {
    document.getElementById("ratePopup").style.display = "block";
});

document.querySelector(".close-button").addEventListener("click", function() {
    document.getElementById("ratePopup").style.display = "none";
});
