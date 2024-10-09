const Cartproduct = ({ cart, toggleCart }) => {
    return (
        <div className="cart-modal">

            {cart.length === 0 ? (

                <div className="">
                    <button className="close-cart" onClick={toggleCart}>
                        Закрыть корзину
                    </button>
                    <p>Корзина пуста</p>
                </div>
            ) : (
                cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <h2>{item.name}</h2>
                        <p>Размер: {item.size}</p>
                        <p>Тип: {item.type}</p>
                        <p>Цена: {item.price} ₽</p>
                        <p>{item.quantity}</p>
                    </div>
                ))
            )}
            <button className="close-cart" onClick={toggleCart}>
                Закрыть корзину
            </button>
        </div>
    );
};

export default Cartproduct;
