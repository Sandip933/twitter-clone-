const express = require('express');
// const app = express();
const router = express.Router();

// app.set('view engine', "pug");
// app.set("views", "views");

router.get("/", (req, res, next) => {

});

router.post("/", (req, res, next) => {
    if (!req.body.content) {
        console.log("Content param not sent with requst");
        res.sendStatus(400);
    }
    return res.status(200).send("It works")
});

module.exports = router;