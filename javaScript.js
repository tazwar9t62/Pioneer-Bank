let loginButton = document.getElementById("login-btn").addEventListener("click", function () {
    let login = document.getElementById("login-area");
    login.style.display = ("none");
    let trasaction = document.getElementById("transaction-area");
    transaction.style.display = "block";
    let depositBtn = document.getElementById("depositAmount").addEventListener("click", function () {
        let depositInputValue = document.getElementById("depositValue").value;
        let depositNumber = parseFloat(depositInputValue);

        let currentDeposit = document.getElementById("currentDepost").innerText;
        let depositNumber = parseFloat(currentdeposit);
        let depositTotal = currentDeposit + depositNumber;
        document.getElementById("currentDepost").innerText = depositTotal;
    });


})