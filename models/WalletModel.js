import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Wallet = db.define(
  "wallet",
  {
    UserUid: {
      type: DataTypes.TEXT,
    },
    balance: {
      type: DataTypes.TEXT,
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

export default Wallet;
