document.getElementById('showMessageButton').addEventListener('click', function () {
    const numberInput = document.getElementById('numberInput').value;
    const messageDisplay = document.getElementById('messageDisplay');

    const messages = {
        1: "¡Eres increíble! 🌟",
        2: "Hoy será un día maravilloso. ☀️",
        3: "Recuerda que siempre puedes lograr lo que te propongas. 💪",
        4: "Sonríe, porque la vida es bella. 😊",
        5: "¡Gracias por existir, Stefany Casimir! 💖",
    };

    if (!numberInput || numberInput < 1 || numberInput > 5) {
        messageDisplay.textContent = "⚠️ Ingresa un número válido entre 1 y 5.";
    } else {
        messageDisplay.textContent = messages[numberInput];
    }
});
