// Global scope
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

//function and block 
function addBurger() {
const newBurger = 'Flatburger';
   burgers.push(newBurger);
}

  //variable declaration and scope
  if(true) {
    const anotherNewBurger = 'Maple Bacon Burger';
     burgers.push(anotherNewBurger);
  }

    // add another function
    function changeFeaturedDrink() {
      featuredDrink = 'The Javashake';
    }


