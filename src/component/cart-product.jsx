import '../styles/cart-product-text.css';

const Cartproduct = ({ cart, setCart, toggleCart, Cleaercart }) => {

    const incrementQuantity = (productId, size, type) => {
        const updatedCart = cart.map(item => {
            if (item.id === productId && item.size === size && item.type === type) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const decrementQuantity = (productId, size, type) => {
        const updatedCart = cart.map(item => {
            if (item.id === productId && item.size === size && item.type === type && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }).filter(item => item.quantity > 0);
        setCart(updatedCart);
    };

    const deletproducts = (productId, size, type) => {
        const updatedCart = cart.filter((item) => {
            return !(item.id === productId && item.size === size && item.type === type && item.quantity)
        })
        setCart(updatedCart)
    }

    return (
        <div className="cart-modal">
            {cart.length === 0 ? (
                <div className="">
                    <button className="close-cart" onClick={toggleCart}>Закрыть корзину</button>
                    <p>Корзина пуста</p>
                </div>
            ) : (
                cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <div className="info-cart__item">
                            <div className="img-cart">
                                <img className="img-cart__inner" src={item.img} alt={item.name} />
                            </div>
                            <div className="cart-description">
                                <h2>{item.name}</h2>
                                <p>{item.size} {item.type}</p>
                            </div>
                        </div>
                        <div className="quantity-product">
                            <div className="icon-left" onClick={() => decrementQuantity(item.id, item.size, item.type)}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path id="Vector" d="M0 5.33H12V6.66H0V5.33Z" fill="#EB5A1E" />
                                </svg>
                            </div>
                            <p className="quantity-text">{item.quantity}</p>
                            <div className="icon-right" onClick={() => incrementQuantity(item.id, item.size, item.type)}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path id="Vector" d="M10.8 4.79L7.2 4.79L7.2 1.2C7.2 0.53 6.66 0 6 0C5.33 0 4.79 0.53 4.79 1.2L4.79 4.79L1.2 4.79C0.53 4.79 0 5.33 0 6C0 6.66 0.53 7.2 1.2 7.2L4.79 7.2L4.79 10.8C4.79 11.46 5.33 12 6 12C6.66 12 7.2 11.46 7.2 10.8L7.2 7.2L10.8 7.2C11.46 7.2 12 6.66 12 6C12 5.33 11.46 4.79 10.8 4.79Z" fill="#EB5A1E" />
                                </svg>
                            </div>
                        </div>
                        <div className="price-product">
                            <p>{item.price * item.quantity} ₽</p>
                        </div>
                        <div className="delete-product">
                            <img src="Images/delete-product.svg" onClick={() => deletproducts(item.id, item.size, item.type)} alt="Удалить" />
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};


export default Cartproduct;
