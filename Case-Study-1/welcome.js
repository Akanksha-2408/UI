document.getElementById("welcome-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission 
    const choices = document.querySelector('input[name="accountChoice"]:checked');
    if (choices) {
        const selectedValue = choices.value;
        if (selectedValue === "new") {
            window.location.href = "newAccount.html"; // Redirect to New Account page
        } else if (selectedValue === "existing") {
            window.location.href = "existingAccount.html"; // Redirect to Existing Account page
        }
    } else {
        alert("Please select an option before submitting.");
    }
});