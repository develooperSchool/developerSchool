var express = require('express');
const mentorController = require("../controllers/mentor.controller");
const validation = require("../middlewares/validations/mentor.validation.middelware")

// const { router } = require('../app');
var router = express.Router();

// const mentorValidation = require('../validation/mentor/mentor.validation')

router.get('/allMentor', (req, res, next) => {

    const query = "select * from mentor_details"

    db.query(query).then((result) => {
        const [req, res] = result;
        console.log(req);
        console.log(err)
        console.log(res)
        res.send(res)
    })
        .catch((error) => {
            res.send(error)
        });
})

// router.use("/mentor", (req, res, next) => {
//     if(req.body.firstName){
//         next();
//     } else {
//         res.send("firstname not found")
//     }
// })

// router.use("/mentor", (req, res, next) => {
//     if(req.body.lastName){
//         next();
//     } else {
//         res.send("lastname not found")
//     }
// })

// get method 

router.get("/mentors", (req, res) => {
    mentorController.getAllMentors(req, res);

});

// post method 
router.post("/addMentor", (req, res) => {
    mentorController.addMentorController(req, res)
})

// update method 

router.put("/update/:id", (req, res) => {
    mentorController.updateMentor(req, res);
})

// delete method 
router.delete("/delete/:id",
    validation.deleteMentorByIdValidation,
    mentorController.deleteMentorById
);

module.exports = router;
