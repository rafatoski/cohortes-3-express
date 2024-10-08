import { v4, } from 'uuid';
import { DataTypes, } from 'sequelize';

import { connection, } from '../connection.js';

const User = connection.define(
  'users',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: v4(),
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    givenName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: {
      type: DataTypes.STRING(15),
      unique: true,
      allowNull: true,
    },
    address: DataTypes.STRING,
  },
  {
    timestamps: true, // createdAt, updatedAt
  },
);

User.sync({
  // force: true,
});

export { User, };