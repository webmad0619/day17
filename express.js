// ruleta pero bien, para recordarlo luego: |RUBEN|

// http://localhost:3000/
// https://www.elpais.com:443
// http://www.elpais.com:80

// npm init --y > this initialised npm so it is available in your project
// npm i express > this installs express and its dependencies in your project

// this enables the express web-server in the project
const express = require("express")
// here you initialise the app variable which is an instance of express
const app = express()
// this fs allows you to use nodejs filesystem tools, like reading or writing files
const fs = require("fs")
// here you define a port where express will be listening from
const PORT = 3000
// here you will load all the movies later on
let movies

app.use(express.static('public'));

fs.readFile("./cleanData.json", "utf8", function(err, allMovies) {
    // here you load all the movies after using the readFile fs command of nodejs
    // here you parse the allMovies var which is a string and you 
    // transform it back to a native JS object
    movies = JSON.parse(allMovies)
})

// endpoint
app.get("/vanessa", (req, res) => {
    res.json({hola :true})
})

// endpoint
app.get("/miri", (req, res) => {
    res.json({hello : Math.random()})
})

// endpoint
app.get("/movies", (req, res) => {
    // here you use the movies variables which you previously loaded
    // using fs.readFile
    res.json(movies.filter((movie) => movie.year < 1980)[0])
})

app.get("/home", (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
})

app.listen(PORT)
console.log("I am listening on port " + PORT)