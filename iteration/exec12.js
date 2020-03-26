const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('type a number: ', (number) => {

    console.log(`table: ${number}`)

    number = parseInt(number)

    for (let i = 1; i <= 10; i++) {

        console.log(`${number} x ${i} = ${number * i}`)

    }

    readline.close()
})