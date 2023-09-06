const value = document.querySelector("#value");
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
const res = document.querySelector("#res");

const container = document.querySelector(".container")

let count = 0;

value.textContent = count;

function changeStyles() {
    if (count > 14) {
        value.style.color = "white"
        container.style.backgroundColor = "#1234"
        return;
    }
    if (count > 9) {
        value.style.color = "red"
        container.style.backgroundColor = "black"
        return
    }

    if (count > 4) {
        value.style.color = "blue"
        container.style.backgroundColor = "wheat"
        return
    }

    if (count >= 0) {
        value.style.color = "green"
        container.style.backgroundColor = "lightcyan"
        return
    }
}


inc.addEventListener("click", function () {
    value.textContent = ++count

    changeStyles()
})

dec.addEventListener("click", function () {
    if (count === 0) return
    value.textContent = --count


    changeStyles()
})

res.addEventListener("click", function () {
    count = 0;
    value.textContent = count

    changeStyles()
})






// si count > 5, el numero se pone azul
// si count > 10, el numero se pone rojo