document.getElementById("deposit-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const accountNumber = sessionStorage.getItem("accountNumber");
    const amountEntered = document.getElementById("amount").value;
    const depositAmount = parseFloat(amountEntered);
    
    if (!accountNumber) {
        alert("Account Number not found. Please log in again.");
        window.location.href = 'welcome.html';
        return;
    }
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Please enter a valid positive amount for deposit.");
        window.location.href = 'existingAccount.html';
        return;
    }
    
    const url = `http://localhost:8080/deposit`;

    const requestData = {
        accountNumber: accountNumber,
        amount: depositAmount
    };

    // send request to server
    fetch(url, { 
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(requestData)
    })
    .then(response=> {
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(_result=> {
        const oldBalance = parseFloat(sessionStorage.getItem("balance"));
        const newBalance = oldBalance + depositAmount;
        sessionStorage.setItem("balance", newBalance.toFixed(2));
        alert(`Successfully deposited ${depositAmount} to account number ${accountNumber}`);
        window.location.href = 'options.html';
    })
    .catch(error=> {
        console.error('Error during deposit:', error);
        alert("An error occurred while processing your deposit. Please try again.");
    });
});