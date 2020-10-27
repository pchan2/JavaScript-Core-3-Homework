/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs

    
*/

//https://www.youtube.com/watch?v=vDJpGenyHaA

class ShoppingCart {
  // Add your code here
  constructor(item){
    this.item = item;
  }
  cartContains() {
    // Use console.log() to output everything contained in your 
    console.log(`Your shopping cart has 3 items: ${this.item}`);
  }
}

let myCart = new ShoppingCart(); // Creates an empty shopping cart

myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

myCart.cartContains();
