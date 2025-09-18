import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const CampusAmbassador = sequelize.define(
  "CampusAmbassador",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    college_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    linkedin_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { isUrl: true },
    },
    phone: {  
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
  },
  {
    tableName: "campus_ambassadors",
    timestamps: true, // createdAt, updatedAt
  }
);


export default CampusAmbassador;
