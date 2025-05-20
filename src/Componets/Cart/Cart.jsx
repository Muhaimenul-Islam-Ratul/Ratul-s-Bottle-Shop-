import Bottle from "../Bottle/Bottle";
import './cart.css'
import PropTypes from 'prop-types'
const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Bottle availabe:{cart.length} </h4>
            <div className="cart-container">
                
           
                    
                    {
                    cart.map(bottle=> <div className="one-cart" key={bottle.id}>
                        <img src={bottle.img}></img>
                        <br />
                        <p>Name :{bottle.name}</p>
                        <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                    </div>)
                     }
                
                
                
            </div>
        </div>
    );
};

Cart.propTypes = {

    cart: PropTypes.array.isRequired
}

export default Cart;