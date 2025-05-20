const getStoredCart =() => {
    const StoredCartString =localStorage.getItem('cart');
    if (StoredCartString){
        return JSON.parse(StoredCartString)
    }
    return [];
}

const savecartToLS = cart =>{
    const cartStringified =JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}


const addToLS =id => {
    const cart = getStoredCart();
    cart.push(id);

    // save to local storage
    savecartToLS(cart);
}

const removeFromLS = id=> {
    const cart =getStoredCart();
    const remaining = cart.filter(idx=> idx !==id);
    savecartToLS(remaining);
}

export {addToLS,getStoredCart,removeFromLS}