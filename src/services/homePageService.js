module.exports = () => {
    function get(){ 
        return {
            message: 'agora sim'
        }
    }

    function post({body}){
        if (body.name) {
            return {
                message: `Olá ${body.name}`
            }
        } 
        return {
            message: 'Olá ser que eu nao sei o nome'
        }
    }

    return {
        get,
        post
    }
}