"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ra:{
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },
      password_hash:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      team_id: {
        type: Sequelize.INTEGER,
        references:{model:'teams',key:'id'},
        onUpdate:'CASCADE',
        onDelete:'SET NULL',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("users","team_id");
  },
};

