/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('products', {
      ...ZygoteModel,
      product_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      product_name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      product_images: {
        type: DataTypes.JSON,
        allowNull: false
      },
      product_description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      product_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      product_category_id: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      product_code: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      product_total_sale: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      product_stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      product_weight: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      product_discount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('products')
  }
}
