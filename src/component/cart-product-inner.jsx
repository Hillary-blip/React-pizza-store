
import '../styles/cart-product-text.css';

import Cartproduct from "./cart-product";
const CartProductText = ({ cart, toggleCart, Cleaercart, totalItems, totalPrice, setCart }) => {
    return (
        <div className="carts-product">
            <div className="cart-lenght">

                {cart.length === 0 ? (

                    <div className="empty-cart__inner">

                        <p className='title-empty'> Корзина пуста</p>
                        <p className="text-cart-inner">
                            Вероятней всего, вы не заказывали ещё пиццу.
                            Для того, чтобы заказать пиццу, перейди на главную страницу.
                        </p>
                        <img src="Images/cart-null.svg" alt="" />
                        <button className="close-cart empty-btn " onClick={toggleCart}>
                            Вернуться назад
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
                                <button className="cleaer-caer" onClick={Cleaercart}>Очистить корзину</button>
                            </div>
                        </div>
                        <Cartproduct setCart={setCart} cart={cart}></Cartproduct>
                        <div className="info-cart">
                            <p>Всего пицц:
                                <span className="total-items">
                                    {totalItems}  шт
                                </span>
                            </p>
                            <p> Сумма заказа:
                                <span className="totla-price">
                                    {totalPrice}
                                </span>
                            </p>
                        </div>
                        <div className="close-and-pay">
                            <button className="close-cart" onClick={toggleCart}>
                                Вернуться назад
                            </button>
                            <button className="to-pay close-and-pay">
                                Оплатить сейчас
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