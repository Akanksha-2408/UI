function addNumbers(num1, num2) {
    return num1 + num2;
}

function redirectToHome() {
    // window.location.href = "home.html";  // to open in the same tab
    window.open("home.html", "_blank");     // to open in a new tab

    // // Array initialization
    // let colors = ["Red", "Green", "Blue", "Yellow"];
    // document.writeln("Colors Array:", colors);

    // //Object initialization
    // let person = {
    //     name: "John Doe",
    //     age: 30,
    //     occupation: "Developer"
    // };
    // document.writeln("Person Object:", person.name, ", ", person.age, ", ", person.occupation);

    // // Function call
    // let sum = addNumbers(5, 10);
    // document.writeln("Sum of 5 and 10 is: " + sum);
}

$(document).ready(function() {
    $('#table').DataTable();  //what is Server side and client side 
    $('#form').submit(function(event) {
        let isValid = true;
        const emailValue = $('#email').val().trim();
        const passwordValue = $('#password').val().trim();

        if (emailValue === '') {
            $('#emailError').text("Email field cannot be empty !");
            isValid = false;
        } else {
            $('#emailError').text("");
        }

        if(passwordValue === '') {
            $('#passwordError').text("Password field cannot be empty !");
            isValid = false;
        } else {
            $('#passwordError').text("");
        }

        if(!isValid) {
            event.preventDefault();
            alert("Form submission halted due to validation errors.");
        } else {
            event.preventDefault();
            window.location.href = "home.html";
        }
    });
});