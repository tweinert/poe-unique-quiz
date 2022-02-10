const nameText = document.getElementById("nameText");
const testText = document.getElementById("testText");

let dataObj = {};

function getJson() {
    fetch('./test.json')
        .then(response => response.json())
        .then(data => {
            // data is object containing full csv text
            // gets keys from json file
            const itemKeys = Object.keys(data);
            
            // gets random index and key
            const randIndex = Math.floor(Math.random() * itemKeys.length);

            // random item name
            const randItemKey = itemKeys[randIndex];

            // item url matching randKey
            const itemUrl = data[randItemKey];
            console.log(randItemKey + " " + itemUrl);
        })
        .catch(err => console.log(err));
}

getJson();