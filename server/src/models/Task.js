module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    content: DataTypes.STRING,
    status: DataTypes.BOOLEAN, // false: do not done, true: done
    owner: DataTypes.INTEGER,
  });

  return Task;
};
