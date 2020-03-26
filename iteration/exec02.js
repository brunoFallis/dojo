const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function readUserInfo() {
    readline.question('type a name: ', (name) => {
        readline.question('type a password: ', (password) => {

        if( name !== password )
            return readline.close()
            
        console.log('invalid password')
        readUserInfo()
    })
})
}

readUserInfo()