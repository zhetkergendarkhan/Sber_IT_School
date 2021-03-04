/*const parser =new DOMParser()
const xmlString=`
<book category="CHILDREN">
  <title lang="en">Harry Potter</title>
  <author>J. K. Rowling</author>
  <year>2005</year>
  <price>29.99</price>
</book>`




const xmlDOM=parser.parseFromString(xmlString,"text/html")

const bookNode=xmlDOM.querySelector("book")
const titleNode=xmlDOM.querySelector("title")
const authorNode=xmlDOM.querySelector("author")
const yearNode=xmlDOM.querySelector("year")
const priceNode=xmlDOM.querySelector("price")

const categoryAttr=bookNode.getAttribute("category")
const langAttr=titleNode.getAttribute("lang")


const result={
    category:categoryAttr,
    lang:langAttr,
    title:titleNode.textContent,
    author:authorNode.textContent,
    year:yearNode.textContent,
    price:priceNode.textContent
}

console.log(result)*/


/*--------------------------------------------------------------*/

/*const jsonString=`
{
 "book": {
   "category": "CHILDREN",
   "title": {
      "lang": "en",
      "value": "Harry Potter"
    },
    "author": "J. K. Rowling",
    "year": "2005",
    "price": 29.99
  }
}
`

const data=JSON.parse(jsonString)
const book =data.book

const result={
    category: book.category,
    lang:book.title.lang,
    title:book.title.value,
    author:book.author,
    year:book.year,
    price:book.price
}

console.log(result)*/

/*-------------------------------------------*/
//
// const xhr = new XMLHttpRequest();
// xhr.open("get", "https://picsum.photos/v2/list", true);
// xhr.onload = function() {
//     console.log(`Статус: ${xhr.response}`)
// };
//
// xhr.onerror=function (){
//     console.log(`Ошибка${xhr.status}`)
// }
//
// xhr.send();

/*-------------------------------------------*/

// Получаем данные по ключу myKey в localStorage
let myKey = localStorage.getItem('myKey');

// Если localStorage очищался, то ключа не будет.
// Если не зачищался - получим значение по ключу
console.log('1. myKey', myKey);

// Запишем данные в localStorage в виде простой строки
localStorage.setItem('myKey', 'myValue');

// JSON, который мы будем записывать
const jsonString = `
{
  "book": "Harry Potter"
}
`;

// Запишем данные в localStorage в виде JSON
localStorage.setItem('myJSON', jsonString);


// Получаем данные по ключу myKey в localStorage
myKey = localStorage.getItem('myKey');
console.log('2. myKey', myKey);

// Получаем данные по ключу myJSON в localStorage
const myJSON = localStorage.getItem('myJSON');
// Выводим сразу как объект
console.log('3. myJSON', JSON.parse(myJSON));


// Удаляем данные по ключу myJSON в localStorage
localStorage.removeItem('myJSON');

// Проверяем, какие данные остались
console.log('4. myKey', localStorage.getItem('myKey'));
console.log('5. myJSON', localStorage.getItem('myJSON'));

// Очищаем весь localStorage
localStorage.clear();

// Проверяем, что все удалено
console.log('6. myKey', localStorage.getItem('myKey'));
console.log('7. myJSON', localStorage.getItem('myJSON'));

