/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('my_addresses', [
      {
        my_address_id: 'sdsdasrwerewr23sd3e3ewq',
        my_address_name: 'Joko',
        my_address_kontak: '081233339099',
        my_address_detail:
          'Jl, Hadi Subroto, desa Bandar, kec.Mesuji kec.Batang , Provinsi Jawa Tengah ',
        my_address_postal_code: '3433',
        my_address_provinsi: 'Jawa Tengah',
        my_address_kabupaten: 'Batang',
        my_address_kecamatan: 'Mesuji'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('my_addresses', null, {})
  }
}
