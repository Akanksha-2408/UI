document.addEventListener("DOMContentLoaded", function() {
    const name = sessionStorage.getItem("name");
    const welcomeMessage = document.getElementById("welcome-message");
    if (name && welcomeMessage) {
        welcomeMessage.textContent = `WELCOME ${name}`;
    } else {
        welcomeMessage.textContent = "WELCOME USER";
    }

    //Logic

    let limitReached = true;
    let depositAmount = true;

    function depositable() {
        let amount = prompt("Enter Amount: ", "");
        if(amount != null) {
            depositAmount = true;
        } else {
            depositAmount = false;
        }
    }

    function balanceLimit() {
        if(depositAmount) {
            
        }
    }

    $("#deposit-form").submit(function(event) {
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
            alert(`Successfully deposited ${depositAmount} to account number ${accountNumber}`);
            window.location.href = 'options.html';
        })
        .catch(error=> {
            console.error('Error during deposit:', error);
            alert("An error occurred while processing your deposit. Please try again.");
        });
    })
});

// document.getElementById("option-form").addEventListener("submit", function(event) {
//     event.preventDefault(); 
//     const selectedOption = document.querySelector('input[name="transaction"]:checked');
    
//     if (selectedOption) {
//         const choice = selectedOption.value; 
        
//         // Redirection logic
//         if (choice === "deposit") {
//             window.location.href = "deposit.html"; 
//         } else if (choice === "withdraw") {
//             window.location.href = "withdraw.html"; 
//         } else if (choice === "transfer") {
//             window.location.href = "transfer.html"; 
//         } else if (choice === "checkBalance") {
//             window.location.href = "checkBalance.html"; 
//         }
        
//     } else {
//         alert("Please select an option before submitting.");
//     }
// });