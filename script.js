function init(){
    render();
    getLocalStorage();
    getCartLocalStorage();
    renderCart();
}

// function addToCart(i){
//     if(myDishes[i] && !myCart.includes(myDishes[i])){
//         myCart.push(myDishes[i]);
//     }


//     renderCart();
//     setCartLocalStorage();
// }

function deleteFromCart(i){
    myCart.splice(i, 1);

    renderCart();
    setCartLocalStorage();
}

function addToCart(i) {
    // Check if the index 'i' is valid and the item exists in 'myDishes'
    if (myDishes[i]) {
        // Find if the item already exists in the cart
        const existingItem = myCart.find(item => item.id === myDishes[i].id);

        if (existingItem) {
            // If the item is already in the cart, increase its quantity
            existingItem.quantity += 1;
        } else {
            // If the item is not in the cart, add it with quantity 1
            const newItem = {
                ...myDishes[i],  // Copy all properties of the dish
                quantity: 1      // Set the initial quantity to 1
            };
            myCart.push(newItem);
        }
    }
    // Re-render the cart to reflect changes
    renderCart();
    // Update local storage to persist the cart
    setCartLocalStorage();
}

function increaseQuantity(index) {
    myCart[index].quantity += 1; // Increase the quantity of the item
    setCartLocalStorage(); // Persist the updated cart
    renderCart(); // Re-render the cart and summary
}

function decreaseQuantity(index) {
    if (myCart[index].quantity > 1) {
        myCart[index].quantity -= 1; // Decrease the quantity of the item
    } else {
        myCart.splice(index, 1); // Remove the item if the quantity is 1 and user decreases it
    }
    setCartLocalStorage(); // Persist the updated cart
    renderCart(); // Re-render the cart and summary
}

function toggleCart(){
    document.getElementById('basket').classList.toggle('inner_basket_closed');
}