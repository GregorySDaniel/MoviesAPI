const { Router } = require("express");
const tagsRoutes = Router();

tagsRoutes.get("/",(request, response)=>{
  response.send("tags")
})

module.exports = tagsRoutes;