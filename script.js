const openCookie = document.querySelector("#section1")
const closeCookie = document.querySelector("#section2")

function handleOpenCookie () {
    openCookie.classList.add("hide")
    closeCookie.classList.remove("hide")
}

function tryHandleNewCookie () {
    openCookie.classList.remove("hide")
    closeCookie.classList.add("hide")
}

const cookieTry = document.querySelector("#cookieTry")
const btnReset = document.querySelector("#btnReset")

cookieTry.addEventListener('click', handleOpenCookie)
btnReset.addEventListener('click', tryHandleNewCookie)