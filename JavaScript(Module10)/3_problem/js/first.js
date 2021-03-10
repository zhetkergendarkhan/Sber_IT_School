const input = document.querySelector("input")
const btn = document.querySelector("button")
const chatArea = document.getElementById("chat-area")
const btnGeo = document.querySelector(".j-btn-test")


let websocket = new WebSocket("wss://echo.websocket.org/")
websocket.onopen = function (evt) {
    console.log("CONNECTED")
}

websocket.onclose = function (evt) {
    console.log("DISCONNECTED")
}

websocket.onmessage = function (evt) {
    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data + '</span>')
}

websocket.onerror = function (evt) {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data)
}

function writeToScreen(message) {
    let pre = document.createElement("p")
    pre.style.wordWrap = "break-word"
    pre.innerHTML = message
    chatArea.appendChild(pre)
}

btn.addEventListener('click', () => {
    const value = document.querySelector('input').value;
    writeToScreen("SENT:" + value)
    websocket.send(value)

})


const error = () => {
    let er = document.createElement("p")
    er.innerHTML = "ERROR"
    chatArea.appendChild(er)
}

const success = (position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    let a = document.createElement("a")
    a.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
    writeToScreen(a)
}


btnGeo.addEventListener('click', () => {
    if (!navigator.geolocation) {
        status.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
        status.textContent = 'Определение местоположения…';
    }

    navigator.geolocation.getCurrentPosition(success, error)
})
