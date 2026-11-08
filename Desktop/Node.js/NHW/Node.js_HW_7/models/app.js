"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class App extends Model {}

  App.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "App",
      tableName: "Apps",
      timestamps: false,
    },
  );

  return App;
};
