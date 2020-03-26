const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('type a gender: ', (gender) => {

    switch (gender.toUpperCase()) {
        case 'M':
            console.log('Male')
            break;

        case 'F':
            console.log('Female')
            break;
    
        default:
            console.log('Invalid Gender');
            break;
    }

    readline.close()
})