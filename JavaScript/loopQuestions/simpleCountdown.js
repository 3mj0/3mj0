for (let i = 5; i >= 1; i--) {
    setTimeout(() => {
        console.log(i);
    }, (5-i) * 1000);
}