const adminRoutes = require("./adminRoutes")
const userRoutes = require("./userRoutes")
const passportRoutes = require("./passportRouter")

module.exports = (app,passport) => {
    app.use('/api/admin', adminRoutes)
    app.use('/api/user', userRoutes)
    app.use('/auth/', passportRoutes(passport))
}