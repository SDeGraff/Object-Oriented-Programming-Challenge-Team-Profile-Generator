class Question {
    constructor(role) {
        this.role = role;
        this.customQuestion;
        this.assignCutomQuestion();       
    }
    assignCutomQuestion() {
        if (!this.role) {
            return [
                {
                type: 'list',
                message: 'What would you like to do next?',
                name: 'action',
                choices: ['Add Engineer, Generate Team Profile, Add Intern']   
                }
            ]
        }
        if (this.role === 'Engineer') {
            this.customQuestion = 
                {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'github',
                } 
                
        } else {
            this.customQuestion = 
                {
                type: 'input',
                message: 'What is your school?',
                name: 'school',
                } 
        } return [
            {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
            },
            {
            type: 'input',
            message: 'What is your ID?',
            name: 'id',
            },
            {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
            },
        ]
    }   
}

module.exports = Question;
