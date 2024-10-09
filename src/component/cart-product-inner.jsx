
import '../styles/cart-product-text.css';

import Cartproduct from "./cart-product";
const CartProductText = ({ cart, toggleCart, Cleaercart, totalItems, totalPrice, setCart }) => {
    return (
        <div className="">
            <div className="cart-lenght">

                {cart.length === 0 ? (

                    <div className="">

                        <p>Корзина пуста</p>
                        <button className="close-cart" onClick={toggleCart}>
                            Закрыть корзину
                        </button>
                    </div>
                ) : (
                    <div className="">
                        <div className="title-cart">
                            <div className="logo-cart">
                                <img src="Images/cart-icon.svg" alt="" />
                                <p className="logo-text">Корзина</p>
                            </div>
                            <div className="cleaer-logo">
                                <img src="Images/trash-cart.svg" alt="" />
                                <button className='cleaer-caer' onClick={Cleaercart}>clear</button>
                            </div>
                        </div>

                        <Cartproduct setCart={setCart} cart={cart}></Cartproduct>
                        <div className="info-cart">
                            <p>Всего пицц: {totalItems}  шт</p>
                            <p> Сумма заказа: {totalPrice}</p>
                        </div>
                        <div className="close-and-puy">
                            <button className="close-cart" onClick={toggleCart}>
                                Закрыть корзину
                            </button>
                        </div>
                    </div>

                )
                }

            </div>
        </div>
    );
}

export default CartProductText