/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('bank_settings', {
      ...ZygoteModel,
      bank_setting_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      bank_setting_name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      bank_setting_number: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      bank_setting_owner_name: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('bank_settings')
  }
}
