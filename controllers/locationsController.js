const express = require("express"); 


const router = express.Router();

const locationsData = require("../models/locations");
// Seperation of concerns 
//  Middleware above the routes!!!!!
//  a function that happens between a request and response

router.get("/locations", (req, res) => {
    res.send(locationsData);
});

// locations.get(":/index", (req, res) => {
//     const { index }= req.params;
//     console.log("Hello look at me<<<_____________")
//     if (locationData[index]){
//         res.json(locationData[index])
//     } else {
//         res.status(404).send("No location at that index");
//     }

// })

// locations.post("/", (req, res) => {
//     console.log("post route")
//     console.log(req.body);
//    locationData.push({name: "newlocation", awesome:true })
//     res.status(200).json(locationData[locationData.length - 1]);
//     res.send("locations")
// })
 

module.exports = router;