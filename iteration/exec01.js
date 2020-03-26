const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function readNumber() {
    readline.question('type a number between 0 - 10: ', (number) => {
        if( number >= 0 && number <= 10 )
            return readline.close()
        readNumber()
    })
}

readNumber()