
module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define("Usuario",{
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }

    })

    return Usuario

}