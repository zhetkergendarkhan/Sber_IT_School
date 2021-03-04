const jsonString=`
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`

const data=JSON.parse(jsonString)
const list =data.list

let arr=[]
for (let s of list){
    const result={
        name:s.name,
        age:s.age,
        prof:s.prof
    }
    arr.push(result)
}

console.log(arr)



