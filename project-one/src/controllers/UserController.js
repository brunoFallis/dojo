const User = require('../models/User')

module.exports = {

    save(request, response) {
        const { userName, userAge } = request.body;

        if (!userName || !userAge)
            return response.send().status(400)

        User.create( { name: userName, age: userAge } )

        return response.json(request.body).status(200)
    }

}