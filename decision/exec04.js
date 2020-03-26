const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('type a letter: ', (letter) => {

    const vogals = ['a', 'e', 'i', 'o', 'u']

    if (vogals.includes(letter.toLowerCase())) {
        console.log('is vogal')
    } else {
        console.log('is consonant')
    }

    readline.close()
})