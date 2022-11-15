# This service has as function of performing the CRUD users, including login with JWT

## Environment variables
MONGO_URI= Your string connection with mongo, for example, in my case i used the mongo <https://www.mongodb.com/atlas/database>. Is a free version mongo, including the host

DB_USER= The name of database why you will save the collection with users

COLLECTION_USER= The name of collection why will content the users

SECRET= your secret key for encoded jwt token

PORT=port why the api will run when the same goes start localhost