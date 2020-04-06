const User = require('../models/User')

module.exports = {

    async delete(request, response) {

        try {

            const { id } = request.params

            await User.deleteOne({ '_id': id })

            return response.status(200).send({ status: 'ok' })
        } catch (error) {
            console.log(error)
            return response.status(500).send({ status: 'error' })
        }

    },

    async get(request, response) {

        const users = await User.find();

        return response.status(200).json(users)
    },

    async save(request, response) {
        const { userName, userAge } = request.body;

        if (!userName || !userAge)
            return response.status(400).json({ status: 'error' })

        const user = await User.create({ name: userName, age: userAge })

        return response.status(200).json(user)
    },

    async update(request, response) {

        const { id } = request.params

        const user = request.body

        if (!(!!user && !!user.userName && !!user.userAge))
            return response.status(400).json({ status: 'error' })

        try {

            const updatedUser = await User.findByIdAndUpdate({ '_id': id }, user)

            return response.status(200).json(updatedUser)

        } catch (error) {
            console.log(error)
            return response.status(500).json({ status: 'error' })
        }

    }

}