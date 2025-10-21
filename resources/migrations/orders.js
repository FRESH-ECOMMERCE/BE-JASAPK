/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('orders', {
      ...ZygoteModel,
      order_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      order_user_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      order_product_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      order_product_price: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      order_total_product_price: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      order_ongkir_price: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      order_total_item: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      order_product_size_selected: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      order_product_color_selected: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      order_status: {
        type: DataTypes.ENUM('waiting', 'process', 'delivery', 'done', 'cancel'),
        allowNull: false,
        defaultValue: 'waiting'
      },
      order_transfer_bank_image: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('orders')
  }
}
