import { Sequelize } from "sequelize";

const db = new Sequelize('crowdinvest','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;