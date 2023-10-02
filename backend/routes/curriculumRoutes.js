const express = require('express');

var curriculumRouter = express.Router()

var curriculumcontroller = require("../controllers/curriculum.controller") 


curriculumRouter.get("/",curriculumcontroller.getAllCurriculum)

 curriculumRouter.get('/:curriculumId',curriculumcontroller.getCurriculumById);

curriculumRouter.post("/curriculumadd",(req, res) => {curriculumcontroller.getCreateCurriculum(req,res)});


  curriculumRouter.put("/update/:id", (req, res) => {curriculumcontroller.udpateCurriculumById(req,res)});

  curriculumRouter.delete("/delete/:id", (req, res) => {curriculumcontroller.deleteCurriculum(req,res) });

module.exports = curriculumRouter