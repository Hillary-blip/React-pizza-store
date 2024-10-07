import Header from './component/header';
import './App.css';
import ProductList from './component/product-list';
import { useState } from 'react';

function App() {
  const [cartModal, setShowCart] = useState(false); // по умолчанию корзина скрыта
  const [cart, setCart] = useState([]);

  const totalItems = cart.length;
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const toggleCart = () => {
    setShowCart(prev => !prev);
  }

  return (
    <div className="App">
      <header>
        <div className="container">
          <Header showCart={cartModal} toggleCart={toggleCart}
            totalItems={totalItems} // Передаём общее количество товаров
            totalPrice={totalPrice}
          />
          <main>
            <div className="main-inner">
              <ProductList totalItems={totalItems} cart={cart} setCart={setCart} showCart={cartModal} />
            </div>
          </main>
        </div>
      </header>
    </div>
  );
}

export default App;
