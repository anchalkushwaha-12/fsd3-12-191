# NPM Project
1. goto project folder(by cd)
2. type `npm init -y`
3. open package.json
4. update `type:module`
5. install nodemon `npm i nodemon -D`
6. update script in package.json

```

script{
    "start": "node app.js",
    "dev": "nodemon prg7.js"
}
```

7. add node_modules to .gitignore
8. to run use npm run dev
## REST API
# Representational State Transfer (REST)
majorly backend server return only data not html file
REST API uses (get, post, put, patch, delete) method to communicate with client
any browser can check only get method
for other method type we use third party API Tester like postman, thunder client, echo api etc  
# aap crash
# request type
1. get- getAll,getById
  Get: /api/products->url for all products
  Get:api/products/1->url for one prodects
2. post - 
url--> POST:/api/products -- add products to the database- data will be share by echo api using
3. PUT:/api/products/Id ->update in products many things ->update by body
   Patch:/api/products/Id ->update in products in one things
4. delete:/api/products/id-> id is deleted
exported function can be