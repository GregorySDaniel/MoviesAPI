const { Router } = require("express");

const UsersController = require("../controllers/UsersController");
const usersController = new UsersController();
const userRoutes = Router();

userRoutes.get("/", usersController.create);

module.exports = userRoutes;