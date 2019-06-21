
const db = require('./queries')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/', (request, response) => {
  response.send({ info: 'Node.js, Express, and Postgres API' })
})

// User Registration and Sign in route 
app.post('/users/registration', db.createUser);
app.post('/signin', db.validate);
app.get('/userId',db.getUserById);
app.post('/usersub', db.postUserSub);
app.get('/usersub/post',db.getUserSub);

//User Favorites create and get route 
//app.post('/user/favorite/:email', db.postUserFavorite);
//app.get('/user/favorite/:email', db.getUserFavorite);







app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})


