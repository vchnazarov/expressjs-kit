let resContainer = document.getElementById("results");

// Part 1 - Create a function that returns a promise
function getJsonAsync(url) {
    // Promises require two functions: one for success, one for failure
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', url);

        xhr.onload = () => {
            if (xhr.status === 200) {
                // We can resolve the promise
                resolve(xhr.response);
            } else {
                reject("Unable to load RSS");
            }
        }

        xhr.onerror = () => {
            reject("Unable to load RSS");
        };

        xhr.send();
    });
}

// Part 2 - The function returns a promise
// so we can chain with a .then and a .catch
getJsonAsync("/js/cards.json").then(json => {
    var result = JSON.parse(json);

    result.forEach(card => {
        var div = document.createElement("div");
        div.innerHTML = `${card.name} cost is ${card.price}`;

        resContainer.appendChild(div);
    });
}).catch(error => {
    resContainer.innerHTML = error;
});