// $(document).ready(function() {
document.addEventListener('DOMContentLoaded', function() {

    //Validate Name
    let nameError = true;
    let pinError = true;
    let balanceError = true;

    $("#name-check").hide();
    $("#pin-check").hide();
    $("#balance-check").hide();

     function validateName() {
        let name = $("#name").val();
        let nameRegex = /[a-zA-z\s]+$/;
        if(name.length === 0){
            $("#name-check").show();
            nameError = false;
        } else if((name.length < 3) || (name.length > 20)) {
            $("#name-check").show().html("**Length of name must be between 3 and 20 characters");
            nameError = false;
        } else if(!nameRegex.test(name)) {
            $("#name-check").show().html("**Name must be a string");
            nameError = false;
        } else {
            $("#name-check").hide();
            nameError = true;
        }
    }

    function validatePin() {
        let pin = $("#pin").val();
        let pinRegex = /^[0-9]+$/;
        if(pin.length === 0) {
            $("#pin-check").show();
            pinError = false;
        } else if(!pinRegex.test(pin)) {
             $("#pin-check").show().html("**Pin must contain only digits");
             pinError = false;
        } else if((pin.length != 4)) {
             $("#pin-check").show().html("**length of PIN must be exactly 4 numbers");
             pinError = false;
        } else {
            $("#pin-check").hide();
            pinError = true;
        }
    }

    function validateBalance() {
        let balance = $("#balance").val();
        let balanceNum = parseFloat(balance);
        if(balance.length === 0) {
            $("#balance-check").show();
            balanceError = false;
        } else if(balanceNum >= 50000) {
            $("#balance-check").show().html("**Maximum allowed balance: 50000");
            balanceError = false;
        } else {
            $("#balance-check").hide();
            balanceError = true;
        }
    }

    $("#registration-form").submit(function(event) {
        event.preventDefault();

        validateName();
        validatePin();
        validateBalance();

        alert(nameError + " " + pinError + " " + balanceError);

        if (nameError && pinError && balanceError) {
            const name = $('#name').val();
            const pin = $('#pin').val();
            const balance = $('#balance').val();

            const requestData = {
                name: name,
                balance: parseFloat(balance),
                pin: parseInt(pin)
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
                    alert("Response not OK")
                    return response.text().then(text => { throw new Error(text || 'Unknown failure'); });
                }
                return response.text(); 
            })
            .then(accountNumber => {
                alert("Account added successfully !\n" + "Your account number is: " + accountNumber); 
                window.location.href = "welcome.html";
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred: " + error.message);
            });
        } else {
            alert("All fields are Compulsory");
            // window.location.reload();
        }
    }); 
});