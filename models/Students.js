'use strict';
module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define('Students', {
    student: DataTypes.STRING,
    selected_count: DataTypes.INTEGER,
    absent: DataTypes.BOOLEAN
  }, {});
  Students.associate = function(models) {
    // associations can be defined here
  };
  return Students;
};