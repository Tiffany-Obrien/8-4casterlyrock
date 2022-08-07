const Employee = require("./Employee");

const engineerQuestionsArr = [

    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's Id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?"
    },


]
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
    }

	getRole() {
		return 'Engineer';
	}
	
	

}

module.exports = { Engineer, engineerQuestionsArr };
