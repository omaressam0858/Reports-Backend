import {DataTypes, Model} from "sequelize";
import sequelize from "../database.js";
import UserModel from "./users.model.js";
import TeamModel from "./teams.model.js";
import ReportModel from "./reports.model.js";

const User = UserModel(sequelize, DataTypes, Model)
const Team = TeamModel(sequelize, DataTypes, Model)
const Report = ReportModel(sequelize, DataTypes, Model)

User.hasOne(Team, {foreignKey: 'id', sourceKey: 'teamId'})
Team.hasMany(User, {foreignKey: 'teamId', sourceKey: 'id'})

User.hasMany(Report, {foreignKey: 'userId', sourceKey: 'id'})
Report.belongsTo(User, {foreignKey: 'userId', targetKey: 'id', as: 'user'})

Team.hasMany(Report, {foreignKey: 'teamId', sourceKey: 'id'})
Report.belongsTo(Team, {foreignKey: 'teamId', targetKey: 'id'})

Report.belongsTo(User, { foreignKey: 'responderId', targetKey: 'id', as: 'responder', references: { model: User, key: 'id' } });
sequelize.sync({alter: true}) 

export {User, Team, Report}