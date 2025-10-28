document.addEventListener("DOMContentLoaded", function() {
    const balance = sessionStorage.getItem("balance");
    const currentBalance = document.getElementById("currentBalance");
    if (balance && currentBalance) {
        currentBalance.textContent = `Current balance: ${balance}`;
    } else {
        currentBalance.textContent = "Balance information not available.";
    }
});