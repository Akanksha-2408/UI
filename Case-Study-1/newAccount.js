document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById("name").value;
    const balance = document.getElementById("balance").value;
    const pin = document.getElementById("pin").value;

    const requestData = {
        name: name,
        balance: balance,
        pin: pin
    };
    
    const url = 'http://localhost:8080/add';

    fetch(url, { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
    })
    
    // check server response
    .then(response => {
        if (!response.ok) {
             return response.text().then(text => { throw new Error(text || 'Unknown failure'); });
        }
        return response.text(); 
    })
    .then(accountNumber => {
        alert("Account added successfully !");
        alert("Your account number is: " + accountNumber); 
        window.location.href = "welcome.html";
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred: " + error.message);
    });
});