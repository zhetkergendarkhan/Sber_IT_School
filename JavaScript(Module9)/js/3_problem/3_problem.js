const result=document.getElementById("result")
const btn=document.getElementById("btn")

btn.addEventListener('click',()=>{
    const value = document.querySelector('input').value;
    if (value>=1 && value<=10){
        let res =null
        let url=`https://picsum.photos/v2/list?limit=${value}`
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() {
            if (xhr.status != 200) {
                console.log("Что-то пошло не так. Статус ответа - " + xhr.status);

            } else {

                res = JSON.parse(xhr.response)

                let cards = '';
                res.forEach(item => {
                    const cardBlock = `
                    <div class="card">
                    <p>id:${item.id}</p>
                        <img src="${item.download_url}" class="card-image"/>
                        <p>author:${item.author}</p>
                    </div>`
                    cards = cards + cardBlock;
                });
                result.innerHTML = cards;
            }
        }
        xhr.onerror= function() {
            console.log("Что-то пошло не так. Статус ответа - " + xhr.status);
        }
        xhr.send()
    }
    else{
        result.innerHTML="ERROR"
    }

})

