const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('type a gender: ', (gender) => {

    switch (gender) {
        case 'M':
            console.log('Male')
            break;
    
        default:
            break;
    }

    readline.close()
})