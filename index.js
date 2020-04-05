const Cat = require('./Cat');
const Mouse = require('./Mouse');
const Dog = require('./Dog');

let dog = new Dog();
let cat = new Cat();
let mouse = new Mouse('Mickey');
try {
	cat.eat(dog);
} catch(error){
	console.log('Error');
}

console.log(mouse);