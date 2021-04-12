require("dotenv").config();
const Express = require('express');
const app = Express();
const dbConnection = require("./db");

app.use(require('../Node Server/server/middleware/header'));

const controllers = require("./Controllers");

app.use(Express.json());


app.use("/use", controllers.userController);

app.use(require("./Middleware/validate-jwt"));
app.use("/journal", controllers.journalController);

dbConnection.authenticate()
.then(() => dbConnection.sync())
.then(() => {
    app.listen(3001, () => {
        console.log(`[Server]: App is listening on 3001.`);
    });
})
.catch ((err) => {
    console.log(`[Server]: Server crashed. Error = ${err}`);
});

// app.use('/test', (req, res) => {
//     res.send('This is a message from the test endpoint on the server!')
// });

// app.listen(3001, () => {
//     console.log(`[Server]: App is listening on 3000.`);
// });