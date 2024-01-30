import {DataTypes, Model} from "sequelize";
import sequelize from "../database.js";
import UserModel from "./users.model.js";

const User = UserModel(sequelize, DataTypes, Model)

sequelize.sync({force: false})

export {User}