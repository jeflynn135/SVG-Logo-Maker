const inquirer = require('inquirer');
const fs = require('fs')
const {Triangle, Circle, Square} = require("./lib/shapes.js")
// array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What do you want your text to be?',
        name: 'Text',
      },
      {
        type: 'input',
        message: 'What color do you want your text to be?',
        name: 'Text_color',
      },
      {
        type: 'list',
        message: 'What shape would you like?',
        name: 'Shape',
        choices: ['circle', 'triangle', 'square']
      },
      {
        type: 'input',
        message: 'What color would you like your shape to be?',
        name: 'Shape_color',
      },
    ];

// function to create logo
function createLogo(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        err? console.log (err): console.log ('Generated logo.svg')
    })
}

// function to initialize app
function init() {
    inquirer
  .prompt(questions)
.then((response) => {
   console.log (response)
   let shape;
   if (response.Shape === "triangle"){
    shape = new Triangle(response.Shape_color, response.Text, response.Text_color)
   }else if (response.Shape === "circle"){
    shape = new Circle(response.Shape_color, response.Text, response.Text_color)
   }else{
    shape =new Square(response.Shape_color, response.Text, response.Text_color)
   }
   const data = shape.render(response)
createLogo ('./examples/logo.svg', data)
});
}

// Function call to initialize app
init();