/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('addresses', {
      ...ZygoteModel,
      address_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      address_user_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address_user_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address_kontak: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address_detail: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address_postal_code: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address_provinsi: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address_kabupaten: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address_kecamatan: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('addresses')
  }
}
