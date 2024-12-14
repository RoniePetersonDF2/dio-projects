async function addItem(userCart, item) {
    userCart.push(item);
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, index) {
    const deleteIndex = index - 1;

    if (index >=0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

async function calculateTotal(useCart) {
    console.log(`\nShopee Cart TOTAL IS:`);
    
    const result = useCart.reduce((total, item) => total + item.subtotal(), 0);

    console.log(`\nTotal is: R$ ${result}`);
    
}

async function displayCart(useCart) {
    console.log("\nShopee cart list");
    useCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal =  ${item.subtotal()}`);
    });
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
}