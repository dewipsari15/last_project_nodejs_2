import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Invest = db.define(
  "Invest",
  {
    amount: {
      type: DataTypes.INTEGER,
    },
    borrowuid: {
      type: DataTypes.INTEGER,
    },
    useruid: {
      type: DataTypes.INTEGER,
    },
    investuid: {
      type: DataTypes.INTEGER,
    },
    date: {
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

export default Invest;
