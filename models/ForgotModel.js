import { Sequelize } from "sequelize"; 
import db from "../config/Database.js"; 
 
const { DataTypes } = Sequelize; 
 
const Forgot = db.define( 
  "forgot", 
  { 
    code: { 
      type: DataTypes.INTEGER, 
    },
    uid: {
      type: DataTypes.TEXT, 
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
 
export default Forgot;
