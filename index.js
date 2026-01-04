// Global scope
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = ['Strawberry', 'Milkshake'];

//function and block 
function addBurger() {
var newBurger = 'Flatburger';
   burgers.push(newBurger);
}

  //variable declaration and scope
  if (true) {
    let anotherNewBurger = 'Maple Bacon Burger';
     burgers.push(anotherNewBurger);
  }

    // add another function
    function changeFeaturedDrink() {
      featuredDrink = 'The Javashake'
    }

//call the function to test 
addBurger();
console.log('After adding burger:', burgers);

changeFeaturedDrink();
console.log('After changing drink:', featuredDrink);
