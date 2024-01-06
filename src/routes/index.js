const { Router } = require ("express");

const userRouter = require("./users.routes");
const tagsRouter = require("./tags.routes");
const notesRouter = require("./notes.routes");

const routes = Router();

routes.use("/user", userRouter)
routes.use("/tags", tagsRouter)
routes.use("/notes", notesRouter)

module.exports = routes;