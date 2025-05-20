import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../Utilitis/localStorage";
import Cart from "../Cart/Cart";



const Bottles = () => {
    const [bottles, setbottles] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=> {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setbottles(data))
    }, [])

    // Load card from local storage 

    useEffect(()=> {
        if(bottles.length){
            const storedcart =getStoredCart();
            console.log(storedcart);
            const savedCart =[];
            for(const id of storedcart){
                console.log(id);
                const bottle = bottles.find(bottle=>bottle.id===id);
                if(bottle){
                    savedCart.push(bottle)
                }
            }

            console.log(savedCart);
            setCart(savedCart);
        }
        
    },[bottles])

    const handleAddToCart = bottle =>{
        const newCart = [...cart,bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    const handleRemoveFromCart = id =>{

        const remainingCart = cart.filter(bottle=> bottle.id !==id);
        setCart(remainingCart);

        removeFromLS(id);
    }

    return (
        <div>
            <h2>Bottles Avilable : {bottles.length}</h2>
            <Cart cart={cart}
            handleRemoveFromCart = {handleRemoveFromCart}
            ></Cart>
            <div className="bottle-container">
                {
                bottles.map(bottle => <Bottle
                key={bottle.id}
                bottle={bottle}
                handleAddToCart={handleAddToCart}
                ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;