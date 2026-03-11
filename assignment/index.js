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




//Extra Bonus!

//URL ending in "/local"
app.get("/local", (request, response) => {
    // prints on the server side when the client accesses the local route
    console.log("Train property including 1 or 6 Route Reached!")

    // create results array to hold the filtered routes
    // let results = []
    
    // // console.log(allSubwayLines)

    // //cycle through all the subway lines
    // for (let i = 0; i < allSubwayLines.length; i++) {
    //     //if a subwayline object train property has a train containing a 1 or a 6
    //     if ((allSubwayLines[i].train.includes("1")) || (allSubwayLines[i].train.includes("6"))) {
    //         //add it to our results array
    //         results.push(allSubwayLines[i])
    //     }
    // }

    //can also use filter:
    const results = allSubwayLines.filter((subway) => {
        return subway.train.includes("1") || subway.train.includes("6")
    })

    // console.log(results)

    //send only the results array part of the subway object to the user
    response.json(results)
})

app.get("/express", (request, response) => {
    console.log("Train property including 2, 3, 4 or 5 Route Reached")

    // //create results array to hold the filtered routes
    // let results = []

    // //combine the redLine and the greenLine arrays into one array
    // let allSubwayLines = [...subways.redLine, ...subways.greenLine]

    // //cycle through all the subway lines
    // for (let i = 0; i < allSubwayLines.length; i++) {
    //     //if a subwayline object train property has a train containing a 2, 3, 4, or 5
    //     if ((allSubwayLines[i].train.includes("2")) || (allSubwayLines[i].train.includes("3")) || (allSubwayLines[i].train.includes("4")) || (allSubwayLines[i].train.includes("5"))) {
    //         //add it to our results array
    //         results.push(allSubwayLines[i])
    //     }
    // }

    //can also use filter:
    const results = allSubwayLines.filter((subway) => {
        return ( 
            subway.train.includes("2") || 
            subway.train.includes("3") ||
            subway.train.includes("4") ||
            subway.train.includes("5")
        )})

    //send only the results array part of the subway object to the user
    response.json(results)
})




//Bonus!

// //URL ending in "/1"
// app.get("/1", (request, response) => {
//     // prints on the server side when the client accesses the 1 route
//     console.log("Train property including 1 Route Reached!")

//     // console.log(subways.redLine)
//     // create a results array to hold the routes with a train with a 1
//     const just means you can't re-assign, you can add elements!
//     const results = []
//     //cycle through the redLine trains -- greenLine trains don't contain 1s
//     for(let i = 0; i < subways.redLine.length; i++) {
//         //if the redline object property train contains 1
//         if (subways.redLine[i].train.includes("1")) {
//             //add it to our results array
//             results.push(subways.redLine[i])
//     }}
//     // console.log(results)

//     //send only the results array part of the subway object to the user
//     response.json(results)
// })

// combine the redLine and the greenLine arrays into one array
let allSubwayLines = [...subways.redLine, ...subways.greenLine]
// also could do:
// .concat - combines 2 arrays
// both arrays = array1.concat(array2)
//let allSubwayLines = subways.redLine.concat(subways.greenLine)

// Dynamic Parameters -- must go below other defined routes
// parameters included inside the URL
// we set them up with :parameterName
app.get("/:subwayNum", (request, response) => {
    // access dynamic parameters utilizing request.params.parameterName
    const num = request.params.subwayNum
    // console.log(num)

    // Using .filter (which is preferred to loops and if statements)
    // return a condition
    // if the item in the array meets that condition, add it to the resulting list
    // if not, then exclude it
    // create a results array to hold the routes
    // if you have an arrow function and all it does is return, you can get rid of the keyword "return" and the {} and return implictly like such:
    const results = allSubwayLines.filter((subway) => subway.train.includes(num))

    //send only the results array part of the subway object to the user
    response.json(results)
})

//alternate what to do /1 - /6
// //create a trains array that lists all the train lines
// let trains = [1,2,3,4,5,6]

// //cycle through the train lines
// for (let i = 0; i < trains.length; i++) {
//     //URL ending in "/trains[i]"
//     app.get(`/${trains[i]}`, (request, response) => {
//         // prints on the server side when the client accesses the train[i] route
//         console.log(`Train property including ${trains[i]} Route Reached!`)

//         // create a results array to hold the routes with a train with a train[i]
//         // const results = []

//         // //for of loop
//         // //cycle through all the subway lines in our combined array
//         // for(let subway of allSubwayLines){
//         //     //if the subway object property train contains trains[i]
//         //     if(subway.train.includes(`${trains[i]}`)){
//         //         //add it to our results array
//         //         results.push(subway)
//         //     }
//         // }
//         //traditional for loop
//         // //cycle through all the subway lines in our combined array
//         // for(let j = 0; j <allSubwayLines.length; j++) {
//         //     //if the subway object property train contains trains[i]
//         //     if(allSubwayLines[j].train.includes(`${trains[i]}`)) {
//         //         //add it to our results array
//         //         results.push(allSubwayLines[j])
//         //     }
//         // }

//         // Using .filter (which is preferred to loops and if statements)
//         // return a condition
//         // if the item in the array meets that condition, add it to the resulting list
//         // if not, then exclude it
//         // create a results array to hold the routes with a train with a train[i]
//         // const results = allSubwayLines.filter((subway) => {
//         //     return subway.train.includes(`${trains[i]}`)
//         // })

//         // implicit return
//         // if you have an arrow function and all it does is return, you can get rid of the keyword "return" and the {} and return implictly like such:
//         const results = allSubwayLines.filter((subway) => subway.train.includes(`${trains[i]}`))

//         //send only the results array part of the subway object to the user
//         response.json(results)
//     })
// }




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