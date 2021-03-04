const parser =new DOMParser()
const xmlString=`
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

const xmlDOM=parser.parseFromString(xmlString,"text/xml")
const listNode=xmlDOM.querySelector("list")
const studentNode=xmlDOM.querySelectorAll("student")

let arr=[]
for (let s of studentNode){
    let student={
        name:s.querySelector("first"),
        age:s.querySelector("age"),
        prof:s.querySelector("prof"),
        lang:s.querySelector("name").getAttribute("lang"),
    }
    arr.push(student)
}

console.log(arr)
