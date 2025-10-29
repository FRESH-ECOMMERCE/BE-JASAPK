/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('payment_methods', {
      ...ZygoteModel,
      payment_method_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      payment_method_type: {
        type: DataTypes.ENUM('bank', 'qris'),
        allowNull: false
      },
      payment_method_bank_name: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      payment_method_bank_number: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      payment_method_bank_owner: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      payment_method_qris: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      payment_method_description: {
        type: DataTypes.STRING,
        allowNull: true
      }
    })
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('payment_methods')
  }
}
