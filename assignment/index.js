// npm init -y
// npm i express

// import the express module
const express = require("express")
// create an express application
const app = express()

//import subway data
const subways = require("./data/fixture")

// set our port
const PORT = 3000




// set up get routes for our express server

// URL ending in "/"
app.get("/", (request, response) => {
    // prints on the server side when the client accesses the default route
    console.log("All Route Reached!")
    // response.send("All")
    //send the entire subway object to the user
    response.json(subways)
})

// URL ending in "/red"
app.get("/red", (request, response) => {
    // prints on the server side when the client accesses the red route
    console.log("Red Route Reached!")
    // response.send("Red")
    // send only the redLine part of the subway object to the user
    response.json(subways.redLine)
})

// URL ending in "/green"
app.get("/green", (request, response) => {
    // prints on the server side when the client accesses the green route
    console.log("Green Route Reached!")
    // response.send("Green")
    //send only the greenLine part of the subway object to the user
    response.json(subways.greenLine)
})

//URL ending in "/1"
app.get("/1", (request, response) => {
    // prints on the server side when the client accesses the 1 route
    console.log("Train property including 1 Route Reached!")

    // console.log(subways.redLine)
    // create a results array to hold the routes with a train with a 1
    let results = []
    //cycle through the redLine trains -- greenLine trains don't contain 1s
    for(let i = 0; i < subways.redLine.length; i++) {
        //if the redline object property train contains 1
        if (subways.redLine[i].train.includes("1")) {
            //add it to our results array
            results.push(subways.redLine[i])
    }}
    // console.log(results)

    //send only the results array part of the subway object to the user
    response.json(results)
})

// Any other route
app.all("/{*any}", (request, response) => {
    // prints on the server side when the client accesses a URL not defined above
    console.log("No URL reached")
    //send text back to the user
    response.status(404).send("The MTA is currently working to complete this application soon. Thank you for your patience")
})




// set the app to begin listening using our port
app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)
})

