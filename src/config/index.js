require('dotenv').config()

module.exports = {
    createUser: {
        db: process.env.DB_USER,
        collection: process.env.COLLECTION_USER
    }
}
