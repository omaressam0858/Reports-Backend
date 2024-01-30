import {DataTypes, Model} from "sequelize";
import sequelize from "../database.js";
import UserModel from "./users.model.js";
import TeamModel from "./teams.model.js";

const User = UserModel(sequelize, DataTypes, Model)
const Team = TeamModel(sequelize, DataTypes, Model)

User.hasOne(Team, {foreignKey: 'id', sourceKey: 'teamId'})
Team.hasMany(User, {foreignKey: 'teamId', sourceKey: 'id'})

sequelize.sync({force: false})

export {User, Team}