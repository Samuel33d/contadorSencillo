const value = document.querySelector("#value");
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
const res = document.querySelector("#res");

let count = 0;

value.textContent = count;

import { changeStyles } from "./changeStyles.js";

inc.addEventListener("click", function () {
    value.textContent = ++count

    changeStyles(count)
})

dec.addEventListener("click", function () {
    if (count === 0) return
    value.textContent = --count


    changeStyles(count)
})

res.addEventListener("click", function () {
    count = 0;
    value.textContent = count

    changeStyles(count)
})






// si count > 5, el numero se pone azul
// si count > 10, el numero se pone rojo