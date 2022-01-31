
const { Category} = require("../models/categoryindex.js");
 
module.exports = app => {
    
    const Ranjith=require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial

    router.post("/", Ranjith.create);
  
    // Retrieve all Tutorials
    
    router.get("/", Ranjith.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", Ranjith.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", Ranjith.findOne);
    // Update a Tutorial with id
    router.put("/:id", Ranjith.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", Ranjith.delete);
  
    // Delete all Tutorials
    router.delete("/", Ranjith.deleteAll);
  
    app.use('/api/Ranjiths', router);
  };