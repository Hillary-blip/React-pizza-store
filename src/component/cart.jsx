import '../styles/cart.css';

const Cart = () => {
    return (
        <div className="cart-header">
            <div className="cart-price">
                <p className="total-price">530</p>
                <span>Р</span>
            </div>
            <hr className="line-cart" />
            <div className="cart-img">
                <img src="Images\cart-pizza.svg" alt="" />
                <span>0</span>
            </div>
        </div>
    );
}

export default Cart;