/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category2', [
      {
        category_id1: 'dfd324324rwer',
        category_id2: 'sdsd32sdsd4324rwer',
        category_name: 'pakaian'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('category2', null, {})
  }
}
