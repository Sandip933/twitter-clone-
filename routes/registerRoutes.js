const express = require('express');
// const app = express();
const router = express.Router();
const bodyParser = require('body-parser');


// app.set('view engine', "pug");
// app.set("views", "views");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extends: false }))

router.get("/", (req, res, next) => {
    res.status(200).render("register")
})
router.post("/", (req, res, next) => {
    const firstname = req.body.firstName.trim();
    const lastname = req.body.lastName.trim();
    const email = req.body.email.trim();
    const username = req.body.username.trim();
    const password = req.body.password.trim();

    const payload = req.body;

    if (firstname && lastname && email && username && password) {

    } else {
        payload.errorMessage = "Make sure each field has a vaild value.";
        res.status(200).render("register", payload);
    }
})

module.exports = router;