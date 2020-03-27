const User = require('../models/User')

module.exports = {

    async get(request, response) {

        const users = await User.find();

        return response.json(users).status(200)
    },

    async save(request, response) {
        const { userName, userAge } = request.body;

        if (!userName || !userAge)
            return response.send().status(400)

        const user = await User.create({ name: userName, age: userAge })

        return response.json(user).status(200)
    }

}