export default function TeamModel(sequelize, DataTypes, Model) {
    class Team extends Model { }

    Team.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        teamName: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        }

    

    }, {
    sequelize,
        modelName: 'Team',
    });

return Team;
};