const result=document.getElementById("result")
const btn=document.getElementById("btn")



btn.addEventListener('click',()=>{
    const page =document.getElementById("page").value
    const limit =document.getElementById("limit").value
    if (isNaN(page) || page > 10 || page < 1 && isNaN(limit) || limit > 10 || limit < 1) {
        result.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10"
    }
    else if(page>10 || page<1 || isNaN(page)){
        result.innerHTML = "Номер страницы вне диапазона от 1 до 10"
    }
    else if(limit>10 || limit<1 || isNaN(limit)){
        result.innerHTML="Лимит вне диапазона от 1 до 10"
    }
    else{
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            .then(response=>{
                return response.json()
            })
            .then(res=>{
                let a = '';
                res.forEach(item => {
                    const card =
                        `<div>
                          <img src="${item.download_url}" class="card">
                           <p>${item.author}</p>
                           <p>${item.id}</p>
                          </div>`;
                    a = a + card;
                    localStorage.setItem("data",JSON.stringify(res))
                });
                result.innerHTML = a
            })
            .catch(() => {
                console.log("Ошибка")
            })


    }
})

if (localStorage.length != 0) {
    let cash = localStorage.getItem("data")
    let showCash = JSON.parse(cash)
    let a = ' ';
    showCash.forEach(item => {
        const card =
            `<div>
                 <img src="${item.download_url}" class="card">
                    <p>${item.author}</p>
                    <p>${item.id}</p>
            </div>`
        a = a + card;
    })
    result.innerHTML = a
}

