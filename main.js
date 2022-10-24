const myButton = document.querySelector("button");

const URL = 'https://api.thecatapi.com/v1/images/search'

myButton.addEventListener('click', kittyRecharger);


function kittyRecharger() {
    try {
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            const img = document.querySelector('img');
            img.src = data[0].url;
        })
    }
    catch(error) {
        console.log(error);
    }
    
}

kittyRecharger();