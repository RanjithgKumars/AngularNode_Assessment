const { Product } = require("../models/index.js");
 
module.exports = app => {
    const RanjithP = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", RanjithP.create);
  
    // Retrieve all Tutorials
    router.get("/", RanjithP.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", RanjithP.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", RanjithP.findOne);
    // Update a Tutorial with id
    router.put("/:id", RanjithP.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", RanjithP.delete);
  
    // Delete all Tutorials
    router.delete("/", RanjithP.deleteAll);
  
    app.use('/api/RanjithPs', router);
  };