process.stdin.on("end", function () {

    const EventEmitter = require('events');
    let data = input.split(" ");
    n1 = data[0];
    n2 = data[1];
    // console.log(n1,n2);

    let result = 0;
    const sum = () => {
        for (let i = 0; i <= 1000; i++) {
            if (i % n1 == 0) {
                result += i;
            }
        }
        for (let j = 0; j <= 1000; j++) {
            if (j % n2 == 0) {
                result += j;
            }
        }
        console.log(result);
    }
    setTimeout(sum, 2000);

    const event = new EventEmitter();

    event.on("MyEvent", () => {
        console.log(`Multiples of ${n1} & ${n2}`);
    })
    event.emit("MyEvent");



});