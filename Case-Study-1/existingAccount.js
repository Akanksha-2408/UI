document.getElementById("checkAccount").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get account number from user
    const accountNumber = document.getElementById("accountNumber").value;
    const url = `http://localhost:8080/checkAccount?accountNumber=${accountNumber}`;

    // send request to server
    fetch(url, { 
        method: 'GET'
    })

     // recieve server response
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.exists) { 
            alert("Account Found! Proceeding to next step...");
            sessionStorage.setItem("accountNumber", data.accountNumber);
            sessionStorage.setItem("name", data.name);
            sessionStorage.setItem("balance", data.balance);
            alert("Session storage: " + "name: " + sessionStorage.getItem("name") + " " + " account number: " + sessionStorage.getItem("accountNumber") + " balance: " + sessionStorage.getItem("balance"));
            window.location.href = 'options.html'; 
        } else {
            alert("Account does not exist in the database.");
            window.location.href = 'welcome.html';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred.");
    });

});