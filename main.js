const myButton = document.querySelector("button");

const URL = 'https://api.thecatapi.com/v1/images/search'

myButton.addEventListener('click', kittyRecharger);


async function kittyRecharger() {
    const res = await fetch(URL);
    const data = await res.json();

    const img = document.querySelector('img');
    img.src = data[0].url;
}

kittyRecharger();

