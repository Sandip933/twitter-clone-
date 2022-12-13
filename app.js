const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const middleware = require('./middleware');

app.set('view engine', "pug");
app.set("views", "views");

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/login', require('./routes/loginRoutes'));
app.use('/register', require('./routes/registerRoutes'))

const server = app.listen(port, () => {
    console.log("Server listening on port ", port);
});

app.get("/", middleware.requireLogin, (req, res, next) => {
    const payload = {
        pageTitle: "home"
    }
    res.status(200).render("home", payload);
});

