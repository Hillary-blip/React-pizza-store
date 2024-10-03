import Cart from "./cart";
import '../styles/header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-inner">
                <div className="logo-container">
                    <img src="Images\pizza-logo.svg" alt="" />
                    <div className="text-header">
                        <h1 className="title-header">REACT PIZZA</h1>
                        <p className="text-header">самая вкусная пицца во вселенной</p>
                    </div>
                </div>
            </div>
            <Cart></Cart>
        </div>
    );
}

export default Header;