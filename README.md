# This service has as function of performing the CRUD users, including login with JWT

## Environment variables
MONGO_URI= Your string connection with mongo, for example, in my case i used the mongo <https://www.mongodb.com/atlas/database>. Is a free version mongo, including the host

```
DB_USER= The name of database why you will save the collection with users

COLLECTION_USER= The name of collection why will content the users

SECRET= your secret key for encoded jwt token

PORT=port why the api will run when the same goes start localhost
```

## routes 
    
### **/user/create** => POST

this route, with correct informations, create the user why has in body of request
```
curl --location --request POST 'http://localhost:3333/user/create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user": {
        "name": "Jander Teodoro",
        "email": "teste@gmail.com",
        "phone": "11912341234",
        "password": "password12345"
    }
}'
```
model of response:<br>
![response_user_create](src/docs/response_user_create.png)

### **/user/login** -> POST

this route, perform de login of user relize the other operators returning the token why is used for others routes

```
curl --location --request POST 'http://localhost:3333/user/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user": {
        "name": "Jander Teodoro",
        "email": "teste@gmail.com",
        "phone": "11912341234",
        "password": "password12345"
    }
}'
```

model of response:<br>
![response_user_login](src/docs/response_user_login.png)

**/user/delete** => DELETE

this route, delete the user, if he is logged
