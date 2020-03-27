const User = require('../models/User')

module.exports = {

    async delete(request, response) {

        try {

            const { id } = request.params

            await User.deleteOne({ "_id": id })

            return response.send({ status: 'ok' }).status(200)
        } catch (error) {
            console.log(error)
            return response.send({ status: 'error' }).status(500)
        }

    },

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