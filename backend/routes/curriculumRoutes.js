const express = require('express');

var curriculumRouter = express.Router()

var curriculumcontroller = require("../controllers/curriculum.controller") 

var curriculumValidation = require('../middlewares/validations/curriculum.validation.middleware')


curriculumRouter.get("/",curriculumcontroller.getAllCurriculum)

 curriculumRouter.get('/:curriculumId',
 curriculumValidation.getCurriculumByIdValidation,  
 curriculumcontroller.getCurriculumById);

curriculumRouter.post("/curriculumadd",(req, res) => {curriculumcontroller.getCreateCurriculum(req,res)});


  curriculumRouter.put("/update/:id", (req, res) => {curriculumcontroller.udpateCurriculumById(req,res)});

  curriculumRouter.delete("/delete/:id", (req, res) => {curriculumcontroller.deleteCurriculum(req,res) });

module.exports = curriculumRouter