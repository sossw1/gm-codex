module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define('Character', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },

  });

  Character.associate = (models) => {
    Character.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Character;
}
