const CurriculumService = require('../services/curriculum.service');

class CurriculumController {
  getAllCurriculumEntries(req, res) {
    CurriculumService.getAllCurriculumEntries((err, entries) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.status(200).json(entries);
    });
  }

  getCurriculumEntryById(req, res) {
    const id = req.params.id;
    CurriculumService.getCurriculumEntryById(id, (err, entry) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      if (!entry) {
        res.status(404).json({ error: 'Entry not found' });
        return;
      }
      res.status(200).json(entry);
    });
  }

  createCurriculumEntry(req, res) {
    const entry = req.body;
    CurriculumService.createCurriculumEntry(entry, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.status(201).json({ message: 'Entry created successfully', id: result.insertId });
    });
  }

  updateCurriculumEntry(req, res) {
    const id = req.params.id;
    const entry = req.body;
    CurriculumService.updateCurriculumEntry(id, entry, (err) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.status(200).json({ message: 'Entry updated successfully' });
    });
  }

  deleteCurriculumEntry(req, res) {
    const id = req.params.id;
    CurriculumService.deleteCurriculumEntry(id, (err) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.status(200).json({ message: 'Entry deleted successfully' });
    });
  }
}

module.exports = new CurriculumController();

