import '../styles/header.css';
import HeaderCart from './cart';

const Header = ({ showCart, toggleCart, totalItems, totalPrice }) => {
    return (
        <div className="header">
            <div className="header-inner">
                <div className="logo-container">
                    <img src="Images/pizza-logo.svg" alt="" />
                    <div className="text-header">
                        <h1 className="title-header">REACT PIZZA</h1>
                        <p className="text-header">самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <button onClick={toggleCart}>
                    {showCart ? 'Скрыть корзину' : 'Показать корзину'}
                </button>
            </div>
            {!showCart && 
            <HeaderCart  totalItems={totalItems} totalPrice={totalPrice}  onClick={toggleCart} 
            
            />}
        </div>
    );
}

export default Header;
