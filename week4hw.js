function powersOfThree() {
    for(var i = 1; i < 10; i++) {
        powerThree = 3 * ...
        console.log(powerThree);

        if(powerThree == 27) {
            console.log("This is my favorite power of three!");
        }
    }
}

var timeoutID = setTimeout(powersOfThree, 3000);

function everyTenSeconds() {
    console.log("Hello World!");

}

var intervalId = setInterval(everyTenSeconds, 10000);
setTimeout(clearInterval, 200000, intervalId);