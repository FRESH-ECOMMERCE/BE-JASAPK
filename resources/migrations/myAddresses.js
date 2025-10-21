/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('my_addresses', {
      ...ZygoteModel,
      my_address_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      my_address_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      my_address_kontak: {
        type: DataTypes.STRING,
        allowNull: false
      },
      my_address_detail: {
        type: DataTypes.STRING,
        allowNull: false
      },
      my_address_postal_code: {
        type: DataTypes.STRING,
        allowNull: false
      },
      my_address_provinsi: {
        type: DataTypes.STRING,
        allowNull: false
      },
      my_address_kabupaten: {
        type: DataTypes.STRING,
        allowNull: false
      },
      my_address_kecamatan: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('my_addresses')
  }
}
