'use strict';
const { hashPassword } = require('../helpers/bcrypt.js')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Please insert a correct format for Email"
        },
        notEmpty: {
          args: true,
          msg: "Please insert your email!"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 12],
          msg: 'Password length more than 6 and less than 12'
        },
        notEmpty: {
          args: true,
          msg: "Please insert your password!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(user => {
    user.password = hashPassword(user.password)
  })

  return User;
};