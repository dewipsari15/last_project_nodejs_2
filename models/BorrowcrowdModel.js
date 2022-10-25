import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const borrowcrowd = db.define(
    "borrowcrowd",
    {
        title: {
            type: DataTypes.TEXT,
        },
        descrip: {
            type: DataTypes.TEXT,
        },
        category: {
            type: DataTypes.TEXT,
        },
        amount: {
            type: DataTypes.INTEGER,
        },
        logo: {
            type: DataTypes.TEXT,
        },
        collect: {
            type: DataTypes.INTEGER,
        },
        Date: {
            type: DataTypes.DATE,
        },
        refresh_token: {
            type: DataTypes.TEXT,
        },
    },
    {
        freezeTableName: true,
    }
);

(async () => {
    await db.sync();
})();

export default borrowcrowd;
