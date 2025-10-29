document.addEventListener("DOMContentLoaded", function() {
    const name = sessionStorage.getItem("name");
    const welcomeMessage = document.getElementById("welcome-message");
    if (name && welcomeMessage) {
        welcomeMessage.textContent = `WELCOME ${name}`;
    } else {
        welcomeMessage.textContent = "WELCOME USER";
    }

    $('#history').DataTable ({
        "ajax": {"url":"http://localhost:8080/getAll",
                 "dataSrc":""},
        "columns": [
            // {"data": "_id"},
            {"data": "accountNumber"},
            {"data": "name"},
            {"data": "balance"},
            {"data": "pin"}
        ],
    })
});