var mysql = require ("mysql");
var inquirer = require ("inquirer");

var connection = mysql.createConnection({
	host:"localhost",
	port: 3306,
	user: "root",
	password: "Oakland2012!",
	database: "Bamazon",

});

connection.connect(function(err){
	if(err) throw err;
	console.log("connected as  Id" +   connection.ThreadID)
});

connection.query( "Select * FROM products",function(err,rows){
	for (var i=0;i < rows.length;i++){
		console.log(rows[i].id +"|" + rows[i].product_name + "|"+ + rows[i].price)
	}
	promptUser()
});

function promptUser(){
	inquirer.prompt([{
		name :"id",
		type:"input",
		message :"What is the ID of the product you would like to buy?"
		}, {
		name: "stock",
		type: "input",
		message :"How many units of the product would you like to buy?"
		}]).then(function(user){
			if (user.stock === 0){
				console.log("hey")
			}
			else {
			consoloe.log("Insufficient quantity!")
			promptUser();
		}

	});
}