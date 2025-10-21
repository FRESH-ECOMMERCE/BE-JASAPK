/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category1', [
      {
        category_id1: 'dfd324324rwer',
        category_name: 'fashion',
        category_icon: 'https://cdn-icons-png.flaticon.com/512/6165/6165574.png'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('category1', null, {})
  }
}
