const express = require('express');
const router = express.Router();
const CurriculumController = require('../controllers/curriculum.controller');

router.get('/', CurriculumController.getAllCurriculumEntries);
// router.get('/:id', CurriculumController.getCurriculumEntryById);
// router.post('/', CurriculumController.createCurriculumEntry);
// router.put('/:id', CurriculumController.updateCurriculumEntry);
// router.delete('/:id', CurriculumController.deleteCurriculumEntry);

module.exports = router;

