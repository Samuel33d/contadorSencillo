const container = document.querySelector(".container")
const value = document.querySelector("#value")


export function changeStyles(count) {
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