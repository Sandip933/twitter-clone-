const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const { Connect } = require('./connectDB');
const middleware = require('./middleware');
const session = require('express-session');


app.set('view engine', "pug");
app.set("views", "views");
app.use(session({
    secret: "bbq chips",
    resave: true,
    saveUninitialized: false
}))

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/login', require('./routes/loginRoutes'));
app.use('/register', require('./routes/registerRoutes'));
app.use('/logout', require('./routes/logout'));
app.use('/api/post', require('./routes/api/posts'))

const server = app.listen(port, () => {
    console.log("Server listening on port ", port);
});

server.on("listening", async () => {
    await Connect();
    console.log(`We're flying on ${port}`);
});

app.get("/", middleware.requireLogin, (req, res, next) => {
    const payload = {
        pageTitle: "Home",
        userLoggedIn: req.session.user
    }
    res.status(200).render("home", payload);
});

