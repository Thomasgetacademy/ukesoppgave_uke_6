// Model

let mainDiv = document.getElementById('app');
let isName = '';
let isAge = '';
let txt = '';

// View

inputView()
function inputView() {
    let html = /* HTML */`
    <input onchange="getInfo(this, 1)" type="text" placeholder="Name" autocomplete="off">
    <input onchange="getInfo(this, 2)" type="number" placeholder="Age" autocomplete="off">
    `
    mainDiv.innerHTML = html;
}

updateView();
function updateView() {
    html = /* HTML */`
    <h2>${txt}</h2>
    `;
    mainDiv.innerHTML += html;
}

// Controller

function getInfo(inputTxt, input) {

    if (input === 1) {
        isName = inputTxt.value; /* Remove ".value" for Unit testing */
    } else {
        isAge = inputTxt.value; /* Remove ".value" for Unit testing */
    }
    // return isAge; /* Uncomment for Unit testing */
    isName && isAge ? txt = `Name: ${isName} Age: ${isAge}` : txt = '';
    updateView();
}