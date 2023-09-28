const CurriculumDao = require('../dao/curriculum.dao');

class CurriculumService {
  getAllCurriculumEntries(callback) {
    CurriculumDao.getAllCurriculumEntries(callback);
  }

  getCurriculumEntryById(id, callback) {
    CurriculumDao.getCurriculumEntryById(id, callback);
  }

  createCurriculumEntry(entry, callback) {
    CurriculumDao.createCurriculumEntry(entry, callback);
  }

  updateCurriculumEntry(id, entry, callback) {
    CurriculumDao.updateCurriculumEntry(id, entry, callback);
  }

  deleteCurriculumEntry(id, callback) {
    CurriculumDao.deleteCurriculumEntry(id, callback);
  }
}

module.exports = new CurriculumService();
