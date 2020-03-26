const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let isValidNumber = false;

while(!isValidNumber) {

    readline.question('type a number between 0 - 10: ', (number) => {

        if (number >= 0 && number <= 10)
            isValidNumber = true

        console.log(`${number} is valid number`)

        readline.close();
    })

}