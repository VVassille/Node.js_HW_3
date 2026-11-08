const { Sequelize } = require("sequelize");
const config = require("./config.json").development;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((error) => {
    console.error("Unable to connect to database:", error.message);
  });

module.exports = sequelize;
