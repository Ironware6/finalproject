const { Pool, Client } = require('pg')


// Can put Heroku information if you log in with heroku or just do locally with postgres info
let options = {
  user: 'postgres',
  host: 'localhost',
  database: 'project2',
  password: 'password',     // Enter your own postgres password
  port: 5432,
  // ssl: true, - ONLY NEEDED when using HEROKU to connect
}

const pool = new Pool(options)
pool.connect();




// Create the User
 
const createUser = (request, response) => {

	console.log('hello');
  const { fname, email,password, lname } = request.body


    
  pool.query('INSERT INTO users (user_first_name, user_last_name, password, email) VALUES ($1, $2, $3,$4)', [fname, lname,password,email], (error, results) => {

    if (error) {

      throw error

    }
	pool.query('SELECT user_first_name,user_last_name,email from users where email = $1', [email], (err, res) => {
		response.send(res.rows[0]);	
	});
    

  })

}



// Validate the User

const validate = (request, response) => {
		console.log('getting favs');
  const{email,password}=request.body
	


  pool.query('SELECT EXISTS(SELECT * FROM users WHERE  email= $1 AND password= $2)',[email,password], (error, results) => {

    if (error) {
		

      throw error
		
    }
    
     response.send(results.rows[0])
     let tf = JSON.stringify(results.rows[0])
     console.log(tf)


 
	
  })

}



// To get the User by ID/Email


const getUserById = (request, response) => {

  const {email} = request.body
  console.log(email)

  pool.query('SELECT user_first_name,user_last_name,email from users where email = $1', [email], (error, results) => {

    if (error) {

      throw error

    }
        
    response.send(results.rows)

  })


}





	// Get User Favorite

const getUserFavorite = (request, response) => {
		
  const {email} = request.body
  console.log(email)
	


  pool.query('SELECT* from favorites INNER JOIN user_favorites ON favorites.pet_id=user_favorites.pet_id where email = $1', [email], (error, results) => {
	console.log('something');
    if (error) {
		console.log('error')

      throw error

    }

    response.send(results.rows)

  })

}





// user get user sub
const getUserSub = (request, response) => {

  const {email} =request.body



  pool.query('SELECT* FROM submissions where email = $1', [email], (error, results) => {

    if (error) {
      
      throw error

    }

    response.send(results.rows)

  })

}



// Post Submissions
const postUserSub = (request, response) => {

  const {email, name,description, type,photo}=request.body
  console.log(email)



  pool.query('INSERT INTO submissions(email,sub_name,sub_description,sub_type,sub_photo)VALUES($1,$2, $3, $4, $5)', [email, name,description, type,photo], (error, results) => {

    if (error) {
      
      throw error

    }

    pool.query('SELECT * FROM submissions WHERE email = $1', [email], (err, res) => {
		response.send(res.rows);	
	});

  })

}








//Exported all methods used


module.exports = {
	createUser,
	getUserFavorite,
	getUserSub,
	getUserById,
	postUserSub,
	validate

 

}