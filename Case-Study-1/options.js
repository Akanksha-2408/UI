document.addEventListener("DOMContentLoaded", function() {
    const name = sessionStorage.getItem("name");
    const welcomeMessage = document.getElementById("welcome-message");
    if (name && welcomeMessage) {
        welcomeMessage.textContent = `WELCOME ${name}`;
    } else {
        welcomeMessage.textContent = "WELCOME USER";
    }
});

document.getElementById("option-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const selectedOption = document.querySelector('input[name="transaction"]:checked');
    
    if (selectedOption) {
        const choice = selectedOption.value; 
        
        // Redirection logic
        if (choice === "deposit") {
            window.location.href = "deposit.html"; 
        } else if (choice === "withdraw") {
            window.location.href = "withdraw.html"; 
        } else if (choice === "transfer") {
            window.location.href = "transfer.html"; 
        } else if (choice === "checkBalance") {
            window.location.href = "checkBalance.html"; 
        }
        
    } else {
        alert("Please select an option before submitting.");
    }
});