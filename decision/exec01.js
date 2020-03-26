const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('type a number: ', (number1) => {
    readline.question('type another number: ', (number2) => {
        number1 = parseInt(number1)
        number2 = parseInt(number2)

        if( number1 > number2 )
            console.log('Number one is greater')
        else
            console.log('Number two is greater')

        readline.close()
    })
})