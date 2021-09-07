function sendMessage1(event) {
    event.preventDefault();

    const apiKey = "1969448723:AAETw8ZizPzYpJfxEtgyDKU8FAv-hmDzFrU";
    const chatId = "-423060132";

    const name = document.getElementById("name1").value;
    const phone = document.getElementById("phone1").value;
    const phoneErrorMessageElement = document.getElementById("phoneErrorMessage1");

    if (!phone.match(/\d{10}/)) {
        phoneErrorMessageElement.style.display = "block";
        phoneErrorMessageElement.innerHTML = "Неправильно введений телефон!";
        return;
    } else {
        phoneErrorMessageElement.style.display = "none";
    }

    async function postData() {
        await fetch(`https://api.telegram.org/bot${apiKey}/sendMessage`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "chat_id": chatId,
                "text": `Ім'я - ${name}, телефон - ${phone}`,
            })
        });
    };

    postData().then(() => {
        document.location.href = "/thanks.html"
    });
}

function sendMessage2(event) {
    event.preventDefault();

    const apiKey = "1969448723:AAETw8ZizPzYpJfxEtgyDKU8FAv-hmDzFrU";
    const chatId = "-423060132";

    const name = document.getElementById("name2").value;
    const phone = document.getElementById("phone2").value;

    const phoneErrorMessageElement = document.getElementById("phoneErrorMessage2");

    if (!phone.match(/\d{10}/)) {
        phoneErrorMessageElement.style.display = "block";
        phoneErrorMessageElement.innerHTML = "Неправильно введений телефон!";
        return;
    } else {
        phoneErrorMessageElement.style.display = "none";
    }

    async function postData() {
        await fetch(`https://api.telegram.org/bot${apiKey}/sendMessage`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "chat_id": chatId,
                "text": `Ім'я - ${name}, телефон - ${phone}`,
            })
        });
    };

    postData().then(() => {
        document.location.href = "/thanks.html"
    });
}