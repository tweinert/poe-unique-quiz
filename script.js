// item name text header
const nameText = document.getElementById("nameText");

// item image
const itemImage = document.getElementById("itemImage")


getJson();

// functions
function getJson() {
    fetch('./test.json')
        .then(response => response.json())
        .then(data => {

            // TODO move to it's own function (async?)
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

            // display item name and image
            nameText.textContent = randItemKey.toString();
            itemImage.src = itemUrl;
        })
        .catch(err => console.log(err));
}