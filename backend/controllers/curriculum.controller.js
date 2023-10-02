// const express = require('express');

const curriculumService = require('../services/curriculum.service');


async function getAllCurriculum(req, res) {
    const curriculum = await curriculumService.getAllCurriculum();
    res.json(curriculum);
  }

  async function getCurriculumById(req, res) {
    const { topic_id } = req.params;
    const curriculum = await curriculumService.getCurriculumById(topic_id);
    if (!curriculum) {
      res.status(404).json({ error: "Course not found" });
    } else {
      res.json(curriculum);
    }
  }

  const getCreateCurriculum = (req, res) => {
    console.log(req.body);
    curriculumService.createCurriculum(req.body)
      .then(() => {
        // console.log(resp);
        res.status(200).send("create");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const udpateCurriculumById = (req, res) => {
    console.log(req.params.id, req.body);
    curriculumService.updateCurriculum(req.params.id, req.body)
      .then(() => {
        // console.log(resp);
        res.status(200).send("UPDATE SUCCESSFULLY");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCurriculum = (req, res) => {
    curriculumService.deleteCurriculum(req.params.id)
      .then(() => {
        // console.log(resp);
        res.status(200).send("DELETED SUCCESSFULLY");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  module.exports = {
    getAllCurriculum,
    getCurriculumById,
    getCreateCurriculum,
    udpateCurriculumById,
    deleteCurriculum
  }
