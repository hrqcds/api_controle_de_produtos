
module.exports = (sequelize, DataTypes) => {

    const Produto = sequelize.define("Produto",{
        codigo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantidade: {
            type: DataTypes.INTEGER,
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

    return Produto

}