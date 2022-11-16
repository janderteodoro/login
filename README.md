# This service has as function of performing the CRUD users, including login with JWT

## ENVIRONMENTS VARIABLES
MONGO_URI= Your string connection with mongo, for example, in my case i used the mongo <https://www.mongodb.com/atlas/database>. Is a free version mongo, including the host

```
DB_USER= The name of database why you will save the collection with users

COLLECTION_USER= The name of collection why will content the users

SECRET= your secret key for encoded jwt token

PORT=port why the api will run when the same goes start localhost
```

## ROUTES
    
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

### **/user/list** -> GET

This route is reponsible for return all users registered in db

```
curl --location --request GET 'http://localhost:3333/user/list' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Wzk5LDExNSwyMTAsMjA5LDEyNiwxOTYsMTQsODIsMjAwLDIwMSwyMDQsMTE4XX0sImlhdCI6MTY2ODU2NTExMiwiZXhwIjoxNjY4NTY1NDEyfQ.PFX8T8geLzxN_Mhxu2MZNB3eZOX___Yf8Z2DKD-p39E' \
--data-raw ''
```
model of response: <br>
![response_user_list](src/docs/response_user_list.png)


