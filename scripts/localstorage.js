function setLocalStorage(){
    let myDishesStorage = JSON.stringify(myDishes);

    if(myDishesStorage){
        localStorage.setItem('dishes', myDishesStorage);
    }
}

function getLocalStorage(){
    let myDishesStorage = localStorage.getItem('dishes');

    if(myDishesStorage){
        myDishes = JSON.parse(myDishesStorage);
    }
}

function setCartLocalStorage(){
    let myCartStorage = JSON.stringify(myCart);

    if(myCartStorage){
        localStorage.setItem('cart', myCartStorage);
    }
}

function getCartLocalStorage(){
    let myCartStorage = localStorage.getItem('cart');

    if(myCartStorage){
        myCart = JSON.parse(myCartStorage);
    }
}