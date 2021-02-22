const result=+prompt("Введите что-то")

if(isNaN(result) || typeof result!=="number"){
    console.log("Упс,кажется вы ошиблись")
}

else{
    if(result%2===0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}
