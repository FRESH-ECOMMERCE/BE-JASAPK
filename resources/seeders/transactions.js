/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('transactions', [
      {
        transaction_id: '4erew4245',
        transaction_price: 25000,
        transaction_order_id: '5referfw454',
        transaction_user_id: '66aba427-4b2b-437e-b427-65f2b3f1eca2',
        transaction_ongkir_price: 5000
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('transactions', null, {})
  }
}
