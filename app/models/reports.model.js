export default function ReportModel(sequelize, DataTypes, Model) {
    class Report extends Model { }

    Report.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false
        },
        teamId: {
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false
        },
        title: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        },
        status: {
            type: DataTypes.SMALLINT,
            defaultValue: 0, // 0 = pending, 1 = accepted, 2 = rejected
        },
        responderId: {
            type: DataTypes.INTEGER,
        }

    }, {
    sequelize,
        modelName: 'Report', 
    });

return Report;
};