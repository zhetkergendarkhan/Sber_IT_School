function interval(first, last) {
    const intervalId = setInterval(() => {
        console.log(first = first + 1);
        if (first >= last) {
            clearInterval(intervalId);
        }
    }, 1000);

}

interval(4, 8);
