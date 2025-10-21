/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('transactions', {
      ...ZygoteModel,
      transaction_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      transaction_price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      transaction_order_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      transaction_user_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      transaction_ongkir_price: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('transactions')
  }
}
