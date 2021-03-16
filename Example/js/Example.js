/**
 * Функция-обертка над XMLHttpRequest, осуществляющая запрос
 * url - урл, по которому будет осуществляться запрос
 * callback - функция, которая вызовется при успешном выполнении
 * и первым параметром получит объект-результат запроса
 */
function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
};

// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.j-btn-request');

/**
 * Функция обработки полученного результата
 * apiData - объект с результатом запроса
 */
function displayResult(apiData) {
    let cards = '';
    // console.log('start cards', cards);

    apiData.forEach(item => {
        const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
        cards = cards + cardBlock;
    });

    // console.log('end cards', cards);

    resultNode.innerHTML = cards;
}

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', () => {
    useRequest('https://picsum.photos/v2/list/?limit=5', displayResult);
})

btnPlus=document.querySelector(".btn_plus")
btnMinus=document.querySelector(".btn_minus")

btnPlus.addEventListener('click',(e)=>console.log(e=e+1))
btnMinus.addEventListener('click',(e)=>console.log(e=e-1))


