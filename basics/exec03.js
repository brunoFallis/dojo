const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('type a number: ', (number1) => {
    readline.question('type another number: ', (number2) => {
        const sum = parseInt(number1) + parseInt(number2);
        console.log(`sum of ${number1} + ${number2} = ${sum}`)
        readline.close()
    })
})