const { body } = require('express-validator');
const dao  = require('../dao/curriculum.dao')


class CurriculumService {
    async getAllCurriculum() {
      return await dao.getAllCurriculum();
    }

    async getCurriculumById(id) {
        return await dao.getCurriculumById(id);
      }

      async createCurriculum(body) {
        return await dao.getCreateCurriculum(body);
      }

      async updateCurriculum(id,body) {
        return await dao.udpateCurriculumById(id,body);
      }

      async deleteCurriculum(id) {
        return await dao.deleteCurriculum(id);
      }

}

module.exports = new CurriculumService();