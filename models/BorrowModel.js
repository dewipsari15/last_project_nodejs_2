import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Borrow = db.define(
  "borrow",
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
    part: {
      type: DataTypes.INTEGER,
    },
    timee: {
      type: DataTypes.INTEGER,
    },
    userUid: {
      type: DataTypes.INTEGER,
    },
    borrowUid: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
    },
    logo: {
      type: DataTypes.TEXT,
    },
    collect: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

export default Borrow;
