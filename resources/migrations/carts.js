/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('carts', {
      ...ZygoteModel,
      cart_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      cart_user_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cart_product_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cart_product_color_selected: {
        type: DataTypes.STRING,
        allowNull: true
      },
      cart_product_size_selected: {
        type: DataTypes.STRING,
        allowNull: true
      },
      cart_total_item: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('carts')
  }
}
