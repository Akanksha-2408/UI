document.getElementById("withdraw-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const accountNumber = sessionStorage.getItem("accountNumber");
    const amountEntered = document.getElementById("amount").value;
    const withdrawAmount = parseFloat(amountEntered);

    fetch('http://localhost:8080/withdraw', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({ accountNumber: accountNumber, amount: withdrawAmount })
    })
    .then(response=> {
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(_result=> {
        alert(`Successfully withdrew ${withdrawAmount} from account number ${accountNumber}`);
        window.location.href = 'options.html';
    })
    .catch(error=> {
        console.error('Error during withdrawal:', error);
        alert("An error occurred while processing your withdrawal. Please try again.");
    });
});