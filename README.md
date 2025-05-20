Ratul's Bottle Shop 

### React JSX.
### Components.
### Props type solve .

import PropTypes from 'prop-types'

Cart.propTypes = {

    cart: PropTypes.array.isRequired
}

### Add to the Cart and  remove from the cart.

### UseEffect

 useEffect(()=> {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setbottles(data))
    }, [])


### Handlebutton 

  const handleAddToCart = bottle =>{
        const newCart = [...cart,bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

### local storage create and Map date from that storage.

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