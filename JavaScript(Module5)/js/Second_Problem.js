let x = prompt('Введите Х:');

if ( isFinite(x) ) {
    console.log('X-Число');
}
else if ( typeof x === 'string' ) {
    console.log('Х-Строка');
}
else if ( typeof x === 'boolean' ) {
    console.log('Х-Булевое значение');
}
else {
    console.log('X не определен');
}
