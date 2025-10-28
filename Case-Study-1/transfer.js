document.getElementById('transfer-form').addEventListener('submit', function(event) {

    event.preventDefault();
    const fromAccount = sessionStorage.getItem('accountNumber');
    const toAccount = document.getElementById('toAccount').value;
    const amount = document.getElementById('amount').value; 
    const parsedAmount = parseFloat(amount)
    alert(`Transferring $${amount} to account ${toAccount}`);

    //Transfer logic
    const url = 'http://localhost:8080/transfer';
    const requestData = {
        from: fromAccount,
        to: toAccount,
        amount: parsedAmount
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
        return response.text();
    })
    .then(_result=> {
        alert(`Successfully transferred ${amount} to account number ${toAccount}`);     
        window.location.href = 'options.html';
    })
    .catch(error=> {
        console.error('Error during transfer:', error);
        alert("An error occurred while processing your transfer. Please try again.");
    });
});