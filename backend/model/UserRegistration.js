import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Application = sequelize.define("Application", {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  organization: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  },
  preferred_theme: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  experience_level: {
    type: DataTypes.STRING,
  },
  technical_skills: {
    type: DataTypes.TEXT,
  },
  motivation: {
    type: DataTypes.TEXT,
  },
  linkedin_post_link: {
    type: DataTypes.TEXT,
  },
  linkedin_post_screenshot_url: {
    type: DataTypes.TEXT, // store S3 URL
  },
  payment_screenshot_url: {
    type: DataTypes.TEXT, // store S3 URL
  },
}, {
  tableName: "thinkerroot_applications",
  timestamps: true, // adds createdAt and updatedAt
});

export default Application;
