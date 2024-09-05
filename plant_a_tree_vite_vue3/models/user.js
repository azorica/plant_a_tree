import { Sequelize } from 'sequelize';
import db from '../config/config.js';

const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // Define your model attributes here
  });

  User.associate = (models) => {
    // Define associations here
  };

  return User;
};

export default User;