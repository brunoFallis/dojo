module.exports = {

    save(request, response) {
        const { userName, userAge } = request.body;

        if (!userName || !userAge)
            return response.send().status(400)

        console.log(userName, userAge)
        // save

        return response.send({status: 'ok'}).status(200)
    }

}