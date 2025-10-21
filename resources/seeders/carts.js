/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('carts', [
      {
        cart_id: 'werew53rewr',
        cart_user_id: '66aba427-4b2b-437e-b427-65f2b3f1eca2',
        cart_product_id: '424323423423erwerewr23423rewr',
        cart_product_color_selected: 'Hitam',
        cart_product_size_selected: 'XL',
        cart_total_item: 1
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('carts', null, {})
  }
}
