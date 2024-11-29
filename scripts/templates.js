function render(){
    let content = document.getElementById('content');
    content.innerHTML = "";

    for(let i = 0; i < myDishes.length; i++){
        content.innerHTML += getTemplates(i);
    }
}

function getTemplates(i){
    return /*html*/`
        <div class="dishes_container">
                    <div class="single_dishes" onclick="addToCart(${i})">
                        <div class="dishes_inner_container">
                                <h3>${myDishes[i].name}</h3>
                                <small>${myDishes[i].description}</small>
                                <strong class="price">${myDishes[i].price.toFixed(2)}€</strong>
                            </div>
                            <div class="plus_container">
                                <img class="plus" src="./images/Favicon/plus.png" alt="">
                            </div>
                    </div>
        </div>
        </div>
    `
}

function renderCart() {
    let content = document.getElementById('inner_basket_dishes');
    content.innerHTML = "";

    let totalAmount = 0;
    let totalPrice = 0;

    if (myCart.length < 1) {
        showEmptyCart();
    } else {
        for (let i = 0; i < myCart.length; i++) {
            const item = myCart[i];
            totalAmount += item.quantity;
            totalPrice += item.price * item.quantity;
            content.innerHTML += getCartTemplates(i);
        }
    }

    // Update cart summary in the DOM
    document.getElementById('cartSummary').innerHTML = `
        <p>Anzahl Gerichte Insgesamt: ${totalAmount}</p>
        <p>Gesamtpreis: ${totalPrice.toFixed(2)}€</p>
    `;
}


function getCartTemplates(i) {
    const item = myCart[i];
    return /*html*/ `
        <div class="cart-item">
                <div class="cart-single-item">
                    <h3>${item.name}</h3>
                    <p>Preis pro Gericht: ${item.price.toFixed(2)}€</p>
                    <p>Total: ${(item.price * item.quantity).toFixed(2)}€</p>
                </div>

                <div class="quantity-controls">
                    <button onclick="decreaseQuantity(${i})">-</button>
                    <p>${item.quantity}</p>
                    <button onclick="increaseQuantity(${i})">+</button>
                    <img src="./images/img/bin.png" alt="bin" onclick="deleteFromCart()">
                </div>
        </div>
    `;
}

function showEmptyCart(){
    document.getElementById('inner_basket_dishes').innerHTML = /*html*/`
    <br><small>Bitte fügen Sie etwas dem Warenkorb hinzu.</small>
    `;
}

