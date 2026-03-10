/*
    0a. In terminal, initialize the project:
    npm init -y
*/

/*
    0b. In terminal, install the express module using the following command:
    npm install express
*/

/*
    1. Import the express module, and prepare a ready-to-use variable for it
*/
const express = require("express")

//REQUIRED!
//Creates an Express application. The express() function is a top-level function exported by the express module.
const app = express() //ready-to-use app variable - variable that will give us access to all of our express functions/functionality


/*
    2. Set the Port we want to use
*/
const PORT = 3000

/*
    4. Set up a response to localhost:3000/
*/


// setting up a get route for our express server

// if client coonects to the specific route in the "path" (in this case "/", the default route), the code inside the callback function is then ran

/*
app.get("path", (request, response) => {
    GET routes allow users to read data
})
*/
app.get("/", (request, response) => {
    // .send() - sending back strings to the user
    // .status(code) - determines the status code of your response
        /*
            200s - GOOD! (304, means continuous 200s)
            400s - bad! data has not been found, or is unauthorized, etc.
            500s - bad! generic server error - can use when 400s aren't suitable
        */
    console.log("route reached!") // will print on server side when client accesses this route
    //status(200) is the default code so we don't actually have to include it
    response.status(200).send("Our first express server! Isn't that cool!?!?!?!?")
})

/*
    nodemon - allows our server to continuously refresh upon making changes to our app and saving. Now, we don't have to continuously stop and then restart the server manually!

    we installed nodemon globally with -g, meaning we only had to install it that one time to gain the nodemon command in our terminal. we can run it for our node projects whenever!

    used comand: npm i -g nodemon
*/
/*
    5. Set up a response to localhost:3000/about
*/
// our 2nd route
app.get("/about", (request, response) => {
    //default status code is 200 so we don't need to put it!
    response.send("About page!")
})

// help
app.get("/help", (request,response) => {
    response.send("Help Me!")
})

//object data
app.get("/user", (request, response) => {
    // .json() - send back object data in JSON format
    response.json({username: "georgeExpress3000", email: "george@express.com"})
})

/*
    6. Set up a response to localhost:3000/*
*/
// app.all("/{*any}")
// catch all route - if route cannot be found above, go here
app.all("/{*any}", (request, response) => {
    //404 - not found
    response.status(404).send("<h1>404 - Page Not Found!</h1>")
})

/*
    3. Set the application to begin listening / begin spinning the server
*/
//just like our http server!
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})