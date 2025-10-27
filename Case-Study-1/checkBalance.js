document.addEventListener("DOMContentLoaded", function() {
    const balance = sessionStorage.getItem("balance");
    const balanceNow = document.getElementById("currentBalance");
    if (currentBalance && balanceNow) {
        welcomeMessage.textContent = `Current Balance: ${balance}`;
    } else {
        welcomeMessage.textContent = "Current Balance: N/A";
    }
});