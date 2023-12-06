//document.getElementById("count-el").innerText = 5

// store the count as 0
// listen for clicks on increment button
// increment count var
// change count-el to reflect new count
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let message = countEl.innerText + " - "
    saveEl.textContent += message
    countEl.textContent = 0
    count = 0
}


