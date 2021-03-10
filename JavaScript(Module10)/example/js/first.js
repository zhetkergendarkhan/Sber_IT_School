const status = document.querySelector("#status")
const mapLink = document.querySelector("#map-link")

const btn = document.querySelector(".j-btn-test")


const error = () => {
    return status.textContent = "Невозможно получить ваше местоположение"
}


const success = (position) => {

    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    status.textContent = `Широта:${latitude}  Долгота:${longitude}`

    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = 'Ссылка на карту';
}


btn.addEventListener('click',()=>{
    mapLink.href=""
    mapLink.textContent=""

    if(!navigator.geolocation){
        status.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
        status.textContent = 'Определение местоположения…';
    }

    navigator.geolocation.getCurrentPosition(success,error)
})
