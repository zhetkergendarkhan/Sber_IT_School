function countDown(n){
    if(n!=number){
        return  "Введенное значение не является числом"
    }
    else if(n<1){
        return "Введенное число меньше 1"
    }
    else{
    for (let i =n;i>=1;i--){
           return(i)
       }
    }
}



module.exports=countDown


