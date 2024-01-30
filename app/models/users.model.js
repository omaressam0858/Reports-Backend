import bcrypt from 'bcrypt';
export default function UserModel(sequelize, DataTypes, Model) {
    class User extends Model { }

    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        },
        password: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        },
        roleId: {
            type: DataTypes.SMALLINT, // 0: player, 1: coach, 2: admin
            required: true,
            defaultValue: 0
        },
        phoneNumber: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        },
        gameUserName: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        },
        teamId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
    sequelize,
        modelName: 'User',
    });

    User.beforeCreate(async (user, options) => {
        user.password = await bcrypt.hash(user.password,10);
    })
return User;
};