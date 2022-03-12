const apiRouter = require("./api/api")


const router = (app) => {
    return app.use("/api", apiRouter)
}

module.exports = router