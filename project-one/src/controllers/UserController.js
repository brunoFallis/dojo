module.exports = {

    save(request, response) {
        const { userName, userAge } = request.body;

        if (!userName || !userAge)
            return response.send().status(400)

        console.log(userName, userAge)
        // save

        return response.json(request.body).status(200)
    }

}