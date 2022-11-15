require('dotenv').config()

module.exports = {
    user: {
        db: process.env.DB_USER,
        collection: process.env.COLLECTION_USER,
        secretKeyToken: process.env.SECRET
    }
}
