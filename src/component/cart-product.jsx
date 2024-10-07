const Cartproduct = ({ cart, showCart }) => {
        console.log(cart); // Вывод массива cart в консоль
        return (
            <div className="">
                {showCart && (
                    <div className="cart">
                        <h2>Корзина</h2>
                        {cart.length === 0 ? (
                            <p>Корзина пуста</p>
                        ) : (
                            <ul>
                                {cart.map((item, index) => (
                                    <li key={index}>
                                        {item.name}, {item.size}, {item.price} ₽
                                        <p>{item.type}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        );
    }
    


export default Cartproduct;