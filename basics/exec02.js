const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('type a number: ', (number) => {
    console.log(`number typed is ${number}`)
    readline.close()
})