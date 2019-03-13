// Model the sql below into a sequle model
/*CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);*/

// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.


// Creates a "Burger" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      burger_name: DataTypes.STRING,
      devoured:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
      } 
    });
    return Burger;
  };