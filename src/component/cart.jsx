import '../styles/cart.css';

const HeaderCart = ({ showCart, toggleCart,totalItems, totalPrice  }) => {
    return (
        <div  className="cart-header">
            <div className="cart-price">
                <p onClick={toggleCart} className="total-price">{totalPrice}</p>
                <span>Р</span>
            </div>
            <hr className="line-cart" />
            <div className="cart-img">
                <img src="Images\cart-pizza.svg" alt="" />
                <span>{totalItems}</span>
            </div>
        </div>
    );
}

export default HeaderCart;