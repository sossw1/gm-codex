module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Character, {
      onDelete: 'cascade',
    });
  };

  return User;
}
