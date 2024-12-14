import * as cartService from "./services/cart.js";
import createItem from "./services/item.js"; 
const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

// console.log(item2.subtotal());
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);


await cartService.removeItem(myCart, 0);
// mostrar carrinho
await cartService.displayCart(myCart);

// deletar item carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

const total = await cartService.calculateTotal(myCart);




