const result=document.getElementById("result")
const btn=document.getElementById("btn")

btn.addEventListener('click',()=>{
    const value = document.querySelector('input').value.split("*");
    if (value[0]<100 || value[0]>300 ||value[1]<100 || value[1]>300) {
        result.innerHTML = "WRONG"
    }
    else{
        fetch(`https://picsum.photos/${value[0]}/${value[1]}`)
            .then(response=>{
                const res=`<div><img src="${response.url}"></div>`
                result.innerHTML=res
            })
            .catch(()=>{
                result.innerHTML="WRONG"
            })
    }
})

