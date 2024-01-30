import {DataTypes, Model} from "sequelize";
import sequelize from "../database.js";
import UserModel from "./users.model.js";
import TeamModel from "./teams.model.js";

const User = UserModel(sequelize, DataTypes, Model)
const Team = TeamModel(sequelize, DataTypes, Model)

sequelize.sync({force: false})

export {User, Team}