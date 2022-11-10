module.exports = ({homePageService}) => {
    const get = async (request, response) => {
        try {
            const execute = await homePageService().get()
            return response.json(execute)
        } catch(error) {
            throw error
        }
    }

    const post = async (request, response) => {
        try {
            const { body } = request;
            const execute = await homePageService().post({ body })
            return response.json(execute)
        } catch(error) {
            throw error
        }
    }

    return {
        get,
        post
    }
}