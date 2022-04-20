function powersOfThree() {
    for(var i = 1; i < 19683; i *= 3) {
        console.log(i);
        if(i == 27) {
            console.log("This is my favorite power of three!");
        }
    }
}
setTimeout(powersOfThree, 3000);

function everyTenSeconds() {
    var intervalId = setInterval(everyTenSeconds, 10000, "Hello World!");
    setTimeout(clearInterval, 130000, intervalId);
}
everyTenSeconds();

