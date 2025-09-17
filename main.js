let day = document.querySelector(".day")
let hor = document.querySelector(".hor")
let min = document.querySelector(".min")
let sec = document.querySelector(".sec")

setInterval(() => {
    let fullDate = new Date()
    let date = fullDate.toLocaleString('en', { weekday: "short", day: "2-digit", month: "short", year: "numeric" })
    let hours = fullDate.getHours()
    let minutes = fullDate.getMinutes()
    let seconds = fullDate.getSeconds()
    hor.textContent = hours
    min.textContent = minutes < 10 ? "0" + minutes : minutes;
    sec.textContent = seconds < 10 ? "0" + seconds : seconds;
    day.textContent = date
}, 1000)