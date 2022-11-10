module.exports = () => {
    const get = () => { 
        return {
            message: 'agora sim'
        }
    }

    const post = () => { 
        return {
            message: 'agora post'
        }
    }

    return {
        get,
        post
    }
}