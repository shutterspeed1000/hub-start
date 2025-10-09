setTimeout(function () {
  $(".survey").css("text.color", "red");
}, 1000);

function checkReconnectCode(event) {
    event.preventDefault();
    const code = prompt("Please enter the access code:");
    if (code === "1801") {
        window.open("https://reconnect.commerce.fl.gov", "_blank");
    } else {
        alert("Incorrect code. Access denied.");
    }
}
